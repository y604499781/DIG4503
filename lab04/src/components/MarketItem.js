import React from 'react';

// function takes props, renders each item number
function MarketItem(props) {
  return (
    <div>
      <p>Market Item {props.count}</p>
    </div>
  );
}

export default MarketItem;