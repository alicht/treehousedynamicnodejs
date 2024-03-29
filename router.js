var Profile = require("./profile.js");

function home(request, response){
  // if URL == "/" && GET
    if (request.url === "/") {
    // show search
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");
    response.write("Search\n");
    response.end("Footer\n");
    }
 // if URL == "/" && POST
    // redirect to /:username
  }
// 3. Handle HTTP route GET / :username / i.e. alicht
function user(request, response) {
  // if URL == "/..." 
  var username = request.url.replace("/", "");
    if (username.length > 0) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");
    // get JSON from Treehouse
    var studentProfile = new Profile(username);
      //on "end"
     studentProfile.on("end", function(profileJON){
     // show profile
    // store the values which we need
      var values = {
        avatarUrl: profileJSON.gravatar_url, 
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      }
      // simple response
        response.write(values.username + " has " + values.badges + " badges\n");
        response.end("Footer\n");

     });
     // on "error" 
      studentProfile.on("error", function(error){
      response.write(error.message + "\n");
      // show error 
      response.end("Footer\n"); 
      });
    

    
      }
    }

    module.exports.home = home;
    module.exports.user = user;



