import React from "react";

class AgeSearch extends React.Component {
  readAge(event) {
    event.preventDefault();
    //get input with id "age"
    let element = document.querySelector("#age");
    //add input to url(created in index.js) and find matching data in database.json
    fetch("/api/ages/" + element.value)
    .then((res) => {
      return res.json();
    })
    //if result=not found display error msg in reporting area
    //if match found display matching employee name
    .then((processed) => {
      let reporting = document.querySelector("#reportingArea");
      if(processed.error) {
        reporting.innerHTML = processed.error;
      } else {
        reporting.innerHTML = processed.name;
      }
    });
    element.value = "";
  }

  render() {
    return(
      <div>
        <h2>Age</h2>
        <form onSubmit={this.readAge}>
          <input id="age" type="text"/>
          <button>Submit</button> 
        </form>
      </div>
    )
  }
}

export default AgeSearch;