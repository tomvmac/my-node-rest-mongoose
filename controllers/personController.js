var mongoose = require('mongoose'),
    personModel = mongoose.model('personModel');


exports.list = function(req, res) {
    // find all person
    personModel.find({}, function(err, persons) {
      if (err) {
          return res.status(400).send({
            message: "Unexpected error"
            });
      }
      else {
          // object of all the users
          console.log(persons);
         res.json(200, persons);    
      }
    });
};

exports.findById = function(req, res, id) {
    // find person by id
    personModel.findById(id, function(err, person) {
      if (err) {
          return res.status(400).send({
            message: "Unexpected error"
            });
      }
      else {
          // object of all the users
          console.log(person);
         res.json(200, person);    
      }
    });
};


exports.findByFirstName = function(req, res, firstNameParam) {
    // find person by firstName
    personModel.find({firstName: firstNameParam}, function(err, persons) {
      if (err) {
          return res.status(400).send({
            message: "Unexpected error"
            });
      }
      else {
          // object of all the users
          console.log(persons);
         res.json(200, persons);    
      }
    });
};

exports.save = function(req, res) {
    var person = personModel(req.body); 
    person.save(function(err) {
      if (err) {
          return res.status(400).send({
            message: "Unexpected error"
            });
      }
          // object of all the users
          var successMsg = {message: "Person successfully saved."};
          console.log(successMsg);
          res.json(200, successMsg);    
    });
};



