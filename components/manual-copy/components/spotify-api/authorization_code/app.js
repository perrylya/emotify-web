var express = require('express');
var request = require('request');
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var requestAsync = require('async-request'), response;

var client_id = 'd64ac9abc7fd4a9c9ab9f83a6739524b'; // Your client id
var client_secret = '8b24b9e271cf4943acfe0421e3fce991'; // Your secret
var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri
var options;
var accessToken;

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = 'spotify_auth_state';

var app = express();

app.use(express.static(__dirname + '/public'))
   .use(cors())
     .use(cookieParser());

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});

app.get('/callback', function(req, res) {

  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        var access_token = body.access_token,
            refresh_token = body.refresh_token;

        accessToken = access_token

        options = {
          url: 'https://api.spotify.com/v1/users/fkigawa/playlists',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // we can also pass the token to the browser to make requests from there
        res.redirect('http://localhost:3001/#' +
          querystring.stringify({
            access_token: access_token,
            refresh_token: refresh_token
          }));
      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
});

var newToken;
app.get('/refresh_token', function(req, res) {
  var newToken = req.query.access_token
  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;

  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
});

app.get('/getTrack/:emotion', function(req, res) {
  var allTracks = [];
  var track = '';
  var emotion = req.params.emotion;
  request.get(options, function(error, response, body) {
    for (var i = 0; i < response.body.items.length; i++) {
      if (emotion === response.body.items[i].name) {
        track = response.body.items[i].uri
      }
    }

    var playlist = track.slice(30)
    console.log(playlist);
    res.send(playlist);
    // 5kw7HlLGZUfzwPcV2YO44i

    var newOptions = {
      url: `https://api.spotify.com/v1/users/fkigawa/playlists/{playList}/tracks`,
      headers: { 'Authorization': 'Bearer ' + accessToken },
      json: true
    };

    // {
    // request.get(newOptions, function(error, responseData) {
    //   for (var i = 0; i < responseData.body.items.length; i++) {
    //     allTracks.push(responseData.body.items[i].track.uri)
    //   }
    //   console.log(allTracks)
    //   res.json({track: allTracks})
    // });
    // }
  });
})


console.log('Listening on 8888');
app.listen(8888);
