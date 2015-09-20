module.exports = function(app, person) {
     
    //Handle route "GET /", as in "http://localhost:8080/"
    app.get("/", function(request, response) {

      //Render the view called "index"
      //response.send("Welcome to my-node-rest-mongoose!");
      response.send("/public/index.html");    
    });

    app.get("/person", function(request, response) {

        // get all the person
        person.find({}, function(err, persons) {
          if (err) {
              console.log(err);
              throw err;
          }

          // object of all the users
          console.log(persons);
            
         //Render the view called "index"
            //         response.send("Persons: " + responseName.firstName + " " + responseName.lastName);
         response.json(200, persons);    
        });

        

    });


    
}


