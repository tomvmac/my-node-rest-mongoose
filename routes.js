module.exports = function(app, person, personController) {
     
    //Handle route "GET /", as in "http://localhost:8080/"
    app.get("/", function(request, response) {

      //Render the view called "index"
      //response.send("Welcome to my-node-rest-mongoose!");
      response.send("/public/index.html");    
    });


    app.get("/api/person", function(request, response) {

        // get all the person
        personController.list(request, response);        

    });

    
}


