
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');

var app = express();


// all environments
app.configure(function(){
	app.set('port', process.env.PORT || 3000);
	// default is views
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	// set to be able to see cache, only in prod server
	// app.set('view cache', true);
	// app.enable('view cache');
	// case sensitive routes
	// strict routing

	// MIDDLEWARE www.senchalabs.org/connect/
	app.use(bodyParser());
	// app.use(express.methodOverride());
	// app.use(app.router);
	// streaming static file, e.g. user tracking....
	// app.use(express.static(__dirname + "/public"));
	// app.use(app.router);
});

// app.configure("dev", function(){
// 	app.set('port', process.env.PORT || 3000);
// 	// use to parse coming request body
// 	// app.use(app.router);
// 	app.use(bodyParser());
// 	app.use(app.router);
// });
// NODE_ENV=dev node app.js

app.get("/", function(req, res){
	// need to mention res.render("home.jade"....) if you dont keep app.set('view engine', 'jade') above
	res.render("home.jade", { title : "Welcome to Express and you will enjoy it."});
});

// Use regex for parsing coming request
// app.get(/\/user\/(\d*)\/?(edit)?/, function(req, res){
// 	// Possible matches :
// 	// /user/10
// 	// /user/10/
// 	// /user/10/edit
// 	var message = "\nWelcome " + req.params[0];
// 	if(req.params[1] === 'edit'){
// 		message = "Editing " + message;
// 	} else {
// 		message = "Viewing " + message;
// 	}
// 	res.send(message);
// });

// app.post("/hello", function(req, res){
// 	console.log(req.body.helloworld);
// 	res.send(req.body);
// });

// app.get("/", function(req, res){
// 	res.send("Hello Express...");
// });

// app.get("/app", function(request, response){
// 	response.send("app test...");
// });

// app.get("/hi", function(req, res){
// 	var message = [
// 		"<h1>Hello World</h1>",
// 		"<p> Welcome to 'Building web apps in Node.js with Express'</p>",
// 		"<p> You'll love Express because it's</p>",
// 		"<ul><li>fast</li>",
// 		"<li>fun</li>",
// 		"<li>flexible</li></ul>"
// 	].join("\n");

// 	res.send(message);
// });

// app.get("/user/:userId", function(req, res){
// 	console.log(req.params.userId);
// 	res.send("Hello, <b>" + req.params.userId + "</b>");	
// });

// app.post("/userpost", function(req, res){
// 	console.log("Begin...");
// 	console.log(req.body.username);
// 	res.send("req.body.username is " + req.body.username
// 		 +"\nCreating a new user with the name " + req.body.username + ".");
// });

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});