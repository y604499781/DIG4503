import React, {Component} from 'react';
import MarketItem from './MarketItem'

//market class sets count to 0
class Market extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  };

  //creates button, increase 'count' value by 1 on click event
  render() {
    return(
      <div>
        <MarketItem count={this.state.count} /> 
        <button onClick={() => this.setState({count: this.state.count +1})}>
          Add Market Item
        </button>
      </div>
    )
  }
}

export default Market;