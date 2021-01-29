const axios = require("axios");
//fetch from this api
axios('https://pokeapi.co/api/v2/pokemon/ivysaur')
  //response from api
  .then(function(response) {
    //use the fetch data
    const pokemon = response.data;
    //print requested data to console
    console.log("This is a " + pokemon.name + " and its ID is " + pokemon.id);
  })
  //catch if there's error
  .catch(function(error) {
    //error message
    console.log("Error: " + error);
  });