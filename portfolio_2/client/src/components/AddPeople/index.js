import React from "react";
import "./index.css";

//adding new employee name and age to database
class AddPeople extends React.Component { 
  createEmployee(event) {
    event.preventDefault();
    let name = document.querySelector("#personName");
    let age = document.querySelector("#personAge");
    //grab added data and print to console/report success
    fetch("/api/" + name.value + "/" + age.value, {
      "method": "post"
    }).then((res) => {
      return res.json();
    }).then((processed) => {
      let reporting = document.querySelector("#reportingArea");
      console.log(processed);
      reporting.innerHTML = "New people added.";
    });
    //element.value = "";
  }

  render() {
    return(
      <div class="add">
        <h2>Add New People</h2>
        <form onSubmit={this.createEmployee}>
          <label>Name:</label>
          <input id="personName" type="text"/>
          <label>Age:</label>
          <input id="personAge" type="text"/>
          <br/><br/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddPeople;