import Express from 'express';
import fs from "fs";

const App = Express();
const port = 3010;

//read and parse data in file "database.json"
let fileContents = fs.readFileSync("database.json");
let database = JSON.parse(fileContents);

//establish root directory, static server
App.use("/", Express.static("public"));
//search through database.json for matching name(caps matter)
App.get("/api/employees/:name", (req, res) => {
  //returns error msg if no match found
  let result = {"error": "not found"};
  //compare search with each value in databse.json
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
  let result = {"error": "not found"};
  //matching the searching number with "age" in database.json
  database.forEach((value) => {
    if(req.params.number == value.age) {
      result = value;
    }
  });
  res.json(result);
});

//adds new data to database
App.post("/api/:name/:number", (req, res) => {
  let result = {
    "name": req.params.name,
    "age": parseInt(req.params.number)
  };
  //writes data in database.json
  database.push(result);
  fs.writeFileSync("database.json", JSON.stringify(database, null, '\t'));
  res.json(result);
});

App.listen(port, () => {
  console.log("Server is running.");
})