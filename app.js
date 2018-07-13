let fs = require('fs');
let axios = require('axios');

var image = fs.readFileSync('./public/pic.jpg');
var img = 'https://www.psychologies.co.uk/sites/default/files/styles/psy2_page_header/public/field/image/happylifewoman.jpg'
var apikey = 'PC5A7JaoKp7j0QNovkwN9IN1qXngPub0';
var apisecret = '9ncn_uAkJaWx2rQFWVZrxP3kfUZiONHn';
var url = `https://api-us.faceplusplus.com/facepp/v3/detect?api_key=${apikey}&api_secret=${apisecret}&image_url=${img}&return_attributes=emotion`

axios.post(url).then(function(response){
  console.log(response.data.faces[0].attributes);
})
