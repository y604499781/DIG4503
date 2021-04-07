import MongoClient from "mongodb";
//URL with personal username and password
const URL = "mongodb+srv://ychen:OkvBPu2b5FeTa9Io@cluster0.oewwc.mongodb.net/test";

//connect to MongoDB server, 'connect()' returns a promise
//always set 'useUnifiedTopology: true' to advoid warning msg, 
//it enables updated functionality to remain compatible with older servers & software
MongoClient.connect(URL, { useUnifiedTopology: true})
.then(connection => {
  //getting into desire database and collection
  let database = connection.db("sample_airbnb");
  let collection = database.collection("listingsAndReviews");
  //search using 'find()'
  let cursor = collection.find({
    //review score rating greater than or equal to 99
    "review_scores.review_scores_rating": {$gte: 89},
    //greater than or equal to 5 beds
    beds: {$gte: 5},
    //price less than or equal to 200
    price: {$lte: 200}
  });
  //log matching results to console
  cursor.forEach(document => {
    console.log(document.name);
  }, () => {
    //close connection when done
    connection.close();
  })
})
//log error if connection failed
.catch(error => {
  console.log("Error: " + error);
});