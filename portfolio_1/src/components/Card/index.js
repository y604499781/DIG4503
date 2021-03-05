import React from 'react';
import Content from "../Content/index"
import "./index.css"

class Card extends React.Component {    
  //creates a div box and styles to look like a card
  //pass 'Content' its value for 'myname'
  render() {
    return (
      <div className="card">
        <Content myName = "Yi Chen" />   
      </div>
    );
  }
}
export default Card;