#Persons App - My Mean Stack Sample App 

This is a simple example demonstrating a single page web app with REST endpoints and MongoDb using the following the MEAN Stack:

1. Mongo Db
2. Express
3. Angular
4. Node Js

-------------------------------------------------------------------------------

##Pre-requisites:
1. Node Js Setup
   a. Install Node Js
2. MongoDb Setup
   a. Install MongoDb
   b. Start up mongod
   c. Create a database called tomdb.
   b. Use tomdb.
5. Run insert commands from mongoInitScript to insert records into the person document.

###Optional install:
npm install -g nodemon

-------------------------------------------------------------------------------

##Getting Started:

1. Open Cmd
2. Go to root folder of project
3. execute the command npm install
4. node server.js or nodemon server.js (if you have nodemon installed so you can change server.js without restarting)
5. If all goes well, you should see the following:
  a. Server up and running. Go to http://127.0.0.1:8080
  b. Successfully connected to mongodb://localhost/tomdb

-------------------------------------------------------------------------------

##Additional Resources:

###Angular Resources:
https://docs.angularjs.org/api
http://www.tutorialspoint.com/angularjs

###REST Express Mongoose Resources:
https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications

###Mongo Db Resources:
http://docs.mongodb.org/manual/#getting-started
https://docs.mongodb.org/getting-started/shell/query/
