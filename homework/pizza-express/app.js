// app.js

//require express package
var express = require('express');
//save an express module as 'app'
var app = express();
// assigning 3000 as our port
var port = 3000;



// tells the server to listen for requests on port 3000
app.listen(port, function() {
    console.log("Hello World")

    console.log('Hello World' + port);

    console.log("Hello World")
});