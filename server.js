var express = require('express');
var app = express()

var port = 3001;
app.use(express.static(__dirname + '/'));
app.listen(port);

console.log('Server Started!!' + port);

// API

app.post('/api/login', function(req, res){
	var data = [{
		title : "Voice",
		level : "Beginner" 
	},{
		title : "Blogs",
		level : "Beginner" 
	},{
		title : "Personalized search",
		level : "Beginner" 
	}];
	res.json(data);
})
