var mongoose = require("mongoose");

/* MongoDb Database Connection */

var uristring = 'mongodb://localhost/tomdb';
mongoose.connect(uristring, function (err, res) {
  if (err) { 
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Successfully connected to: ' + uristring);
  }
});

var Schema = mongoose.Schema;

// create a schema
var personSchema = new Schema({
  personId: Number,
  firstName: String,
  lastName: String,
  age: Number,    
  sex: String   
});

// Create a person model from schema
var personModel = mongoose.model('personModel', personSchema, 'person');

module.exports = personModel;
