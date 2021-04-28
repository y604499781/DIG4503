import React from "react";
import "./index.css";
import Clock from "../Clock.js";

class ReportingArea extends React.Component {
  render() {
    return(
      <div class="report">
        <h3>Reporting Area</h3>
        <div id="reportingArea"></div>
        <Clock/>
      </div>
    );
  }
}

export default ReportingArea;