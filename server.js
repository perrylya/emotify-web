const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const api = require('./backend/routes');
const fs = require('fs');
const bodyParser = require('body-parser');
let base64Img = require('base64-img');
let axios = require('axios');
var request = require('request');
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

var client_id = 'd64ac9abc7fd4a9c9ab9f83a6739524b'; // Your client id
var client_secret = '8b24b9e271cf4943acfe0421e3fce991'; // Your secret
var redirect_uri = 'http://localhost:3000/'; // Your redirect uri
var options;
var stateKey = 'spotify_auth_state';

var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

app.use(express.static(path.join(__dirname, 'public')))
    .use(cors())
    .use(cookieParser());
app.use(bodyParser.json());
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

app.use('/api', api);

app.get('/login', function(req, res){
  var state = generateRandomString(16);
  res.cookie(stateKey, state)

  var scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type:'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});


app.post('/image/create', function(req,res){
  if(req.body.image){
    var img = req.body.image
    base64Img.img(img, './public', 'pic', function(err, filepath){
      if (err) {
        console.log(err);
      }
    });

    var apikey = 'PC5A7JaoKp7j0QNovkwN9IN1qXngPub0';
    var apisecret = '9ncn_uAkJaWx2rQFWVZrxP3kfUZiONHn'
    var image = 'http://9097fc70.ngrok.io/pic.jpg';
    var data = {};
    var url = `https://api-us.faceplusplus.com/facepp/v3/detect?api_key=${apikey}&api_secret=${apisecret}&image_url=${image}&return_attributes=emotion`
    axios.post(url).then(function(response){
      data = response.data.faces[0].attributes.emotion;
      data = Object.keys(data).reduce(function(a, b){ return data[a] > data[b] ? a : b });
      res.send(data)
    }).catch(function(error){
      console.log(error);
    })
  }
})


app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:3001/ in your browser.`);
});
