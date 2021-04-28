//'npm start' to run program
import Express from "express";
import fs from "fs";
import cors from "cors";

const App = Express();
const port = 3010;
//use cors before all other requests enables it for those requests.
App.use(cors());

//read and parse data in file "database.json"
let fileContents = fs.readFileSync("database.json");
let database = JSON.parse(fileContents);

//establish root directory, static server
App.use("/", Express.static("client/build"));
//search through database.json for matching name(caps matter)
App.get("/api/employees/:name", (req, res) => {
  //returns error msg if no match found
  let result = {"error": "Not Found"};
  //compare search with each value in databse.json
  //set 'result' to 'value' if a match is found
  database.forEach((value) => {
    if(req.params.name == value.name) {
      result = value;
    }
  });
  //provide response
  res.json(result);
});

//search for "age" in database.json
App.get("/api/ages/:number", (req, res) => {
  let result = {"error": "Not Found"};
  //matching the searching number with "age" in database.json
  database.forEach((value) => {
    if(req.params.number == value.age) {
      result = value;
    }
  });
  res.json(result);
});

//adds new data to database with user input
App.post("/api/:name/:number", (req, res) => {
  let result = {
    "name": req.params.name,
    "age": parseInt(req.params.number)
  };
  //writes data from user input to 'database.json'
  database.push(result);
  fs.writeFileSync("database.json", JSON.stringify(database, null, '\t'));
  res.json(result);
});

App.listen(port, () => {
  console.log("Server is running.");
})