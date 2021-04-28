import React from 'react';

//display local time and date 
class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      currentDateTime: Date().toLocaleString()
    }
  }  

  render() {
    return (
      <div>
        <p>
          {this.state.currentDateTime}
        </p>
      </div>
    );
  }
}

export default Clock;