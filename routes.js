module.exports = function(app) {
 
    function processName(request){
   var responseName = {
      firstName: "Tom",
      lastName: "Mac"
  }
      
  
  if (request.param('firstName') != null)
    responseName.firstName = request.param('firstName');
    
    
  if (request.param('lastName') != null)
    responseName.lastName = request.param('lastName');
    
    return responseName;
   }

    
    
    //Handle route "GET /", as in "http://localhost:8080/"
    app.get("/", function(request, response) {

      //Render the view called "index"
      response.send("index");

    });


    app.get("/myName", function(request, response) {

      var responseName = processName(request);    

      //Render the view called "index"
      response.send("My name really is " + responseName.firstName + " " + responseName.lastName);

    });

    app.get("/myName.json", function(request, response) {

      //Render the view called "index"
      var responseName = processName(request);

      response.json(200, {firstName:responseName.firstName, lastName:responseName.lastName});

    });



    //POST method to create a chat message
    // curl -H "Content-Type: application/json" -X POST -d '{"firstName":"James","lastName":"Bond"}' http://localhost:9090/myName
    app.post("/myName", function(request, response) {


      //The request body expects a param named "message"
    //  var message = request.body.message;

      console.log(request.body);    


      //Looks good, let the client know
     // response.json(200, {firstName: myFirstName, lastname, myLastName});
        response.json(200, {firstName: request.body.firstName, lastName: request.body.lastName});

    });    
    
}


