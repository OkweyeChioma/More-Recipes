const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.post('/', function (req, res) {
  res.send('POST request to the homepage')
});

app.put('/', function(req,res){
	res.send('Insert into recipes')
});

app.delete('/', function(req,res){
	res.send('Delete from recipes')

})
	

app.listen(3000, function() {
  console.log('Server running on port 3000!');
});