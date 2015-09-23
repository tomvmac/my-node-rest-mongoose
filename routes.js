module.exports = function(app, personModel, personController) {
     
    //Handle route "GET /", as in "http://localhost:8080/"
    app.get("/", function(request, response) {

      //Render the view called "index"
      //response.send("Welcome to my-node-rest-mongoose!");
      response.send("/public/index.html");    
    });


    // All persons
    app.get("/api/person", function(request, response) {

        // get all the person
        personController.list(request, response);        

    });
    

    // Person by id
    app.get("/api/person/id/:id", function(request, response) {
        console.log("id is set to " + request.param("id"));   
        personController.findById(request, response, request.param("id"));
            
    });

    
    // Person by firstname
    app.get("/api/person/firstName/:firstName", function(request, response) {
        console.log("firstName is set to " + request.param("firstName"));   
        personController.findByFirstName(request, response, request.param("firstName"));
            
    });
    
    app.post("/api/person", function(request, response) {
        console.log(request.body);
//        console.log("req.body.id to update = " + request.body._id);
//         
//        if (request.body._id != null){
//            // update existing record
//            personController.update(request, response);
//        } else {
//           // create new record   
//           personController.create(request, response);    
//        }
        personController.save(request, response);
        
    });


    
}


