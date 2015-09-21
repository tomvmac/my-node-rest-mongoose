var mongoose = require('mongoose'),
    person = mongoose.model('person');


exports.list = function(req, res) {
    // find all person
    person.find({}, function(err, persons) {
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

