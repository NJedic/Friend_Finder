// DEPENDENCIES
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var express = require("express");
var bodyParser = require("body-parser");

// EXPRESS CONFIG
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Letting node know we're creating an express server
var app = express();

// Setting up the Port
var PORT = process.env.PORT || 3500;

// Serve static content for the app from the "public" directory
app.use(express.static(__dirname + "/public"));

// BodyParser standard code
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ROUTER
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//LISTENER
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT + ", yo");
});