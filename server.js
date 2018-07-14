const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const api = require('./backend/routes');
const fs = require('fs');
const bodyParser = require('body-parser');
let base64Img = require('base64-img');
let axios = require('axios');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

app.use('/api', api);

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
    var image = '437f98e6.ngrok.io/public/pic.jpg';
    var data = {};
    var url = `https://api-us.faceplusplus.com/facepp/v3/detect?api_key=${apikey}&api_secret=${apisecret}&image_url=${image}&return_attributes=emotion`
    axios.post(url).then(function(response){
      data = response.data.faces[0].attributes.emotion;
      console.log(data);
      data = Object.keys(data).reduce(function(a, b){ return data[a] > data[b] ? a : b });
      console.log(data);
    }).catch(function(error){
      console.log(error);
    })
  }
})


app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:3000/ in your browser.`);
});
