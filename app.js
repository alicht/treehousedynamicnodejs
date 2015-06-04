var router = require("./router.js");
// Problem: we need a simple way to look at a user's badge count and JavaScript points from a web browser

// Solution: Use Node.js to perform the profile lookups and server our template via HTTP


// 1. create a web server
  var http = require('http');
  http.createServer(function (request, response) {
    router.home(request, response);
    router.user(request, response);
  }).listen(3000);
  console.log('Server running at http://<workspace-url>/');

// 2. Handle HTTP route GET / and POST / i.e. Home



// 4. Function that handles the reading of files and merge in value
  // read from file and get a string
  // merge values into string