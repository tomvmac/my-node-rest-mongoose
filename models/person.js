var mongoose = require("mongoose");

/* MongoDb Database Connection */

var uristring = 'mongodb://localhost/tomdb';
mongoose.connect(uristring, function (err, res) {
  if (err) { 
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
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

// the schema is useless so far
// we need to create a model using it
//var Person = mongoose.model('Person', personSchema, 'person');  // This is only required to use singular document names
var Person = mongoose.model('Person', personSchema, 'person');

module.exports = Person;
