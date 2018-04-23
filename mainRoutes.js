var path = require('path');
var express = require('express');
var mainRouter = express.Router();

mainRouter.get('/', function (req, res) {
	res.send('Hello TRAV NY BOY, I\'m Node.js');
});

mainRouter.get('/about', function(req, res){
	res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

module.exports = mainRouter;
