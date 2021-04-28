import React from "react";

class NameSearch extends React.Component {
  readName(event) {
    event.preventDefault();
    //get input with id "name" 
    let element = document.querySelector("#name");
    //add input to url(created in index.js) and find matching data in database.json
    fetch("/api/employees/" + element.value)
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
        reporting.innerHTML = processed.age;
      }
    });
    element.value = "";
  }

  render() {
    return(
      <div>
        <h3>Enter Name</h3>
        <form onSubmit={this.readName}>
          <input id="name" type="text"/>
          <button>Submit</button> 
        </form>
      </div>
    )
  }
}

export default NameSearch;