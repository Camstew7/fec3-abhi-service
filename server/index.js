const express = require('express');
const bodyParser = require('body-parser');
const query = require('../database/index.js')
let port = 3007;


let app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


app.get('/', async function(req,res){
  res.send(await query.query(req.query.id));
})

app.listen(port, function(){
  console.log(`listening on port ${port}`);
})