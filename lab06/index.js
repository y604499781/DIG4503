const Express = require("express");
const App = Express();
const port = 3001;

//define root, accessing root directory and response with text
App.get('/', function(request, response){
  response.send("Hello World!");
});

//creat access to folder 'public' and serving files from the local directory
App.use('/public', Express.static("public"));

//combines all of the previous functions,listens on a specific port for HTTP requests.
App.listen(port, function(){
  console.log("Server running!")
});