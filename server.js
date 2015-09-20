/*
 Module dependencies:

 - Express
 - Http (to run Express)
 - Body parser (to parse JSON requests)
 - Underscore (because it's cool)
 - Socket.IO

 It is a common practice to name the variables after the module name.
 Ex: http is the "http" module, express is the "express" module, etc.
 The only exception is Underscore, where we use, conveniently, an
 underscore. Oh, and "socket.io" is simply called io. Seriously, the
 rest should be named after its module name.

 */
var express = require("express")
  , app = express()
  , http = require("http").createServer(app)
  , bodyParser = require("body-parser")
  , mongoose = require("mongoose")
  , _ = require("underscore")
  , person = require("./models/person");  


//Specify where the static content is
app.use(express.static("public", __dirname + "/public"));

/* Server config */
//Server's IP address
app.set("ipaddr", "127.0.0.1");

//Server's port number
var appPort = 8080;
if (process.argv[2] != null){
    appPort = process.argv[2];
}
app.set("port", appPort);

//Specify where the static content is
app.use(express.static("public", __dirname + "/public"));

//Tells server to support JSON requests
app.use(bodyParser.json());


/* Server routing */
var routes = require('./routes')(app, person); 


//Start the http server at port and IP defined before
http.listen(app.get("port"), app.get("ipaddr"), function() {
  console.log("Server up and running. Go to http://" + app.get("ipaddr") + ":" + app.get("port"));
});