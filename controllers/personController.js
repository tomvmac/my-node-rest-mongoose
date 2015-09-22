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
    


