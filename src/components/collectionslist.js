import React, { Component } from 'react';

class CollectionsList extends Component {
  render() {
    return (
      <div className="collections-list block">
        Featured Collections
        <ul>
          <li>U.S. World War II Army Enlistment Records</li>
          <li>U.S. Civil War Soldiers, 1861-1865 </li>
          <li>WWII U.S. Navy Muster Rolls, 1938-1949</li>
          <li>U.S. World War II Draft Registration Cards, 1942</li>
          <li>U.S. Civil War Soldiers, 1861-1865 </li>
        </ul>
        <button className="button button--secondary">See all collections</button>
      </div>
    );
  }
}

export default CollectionsList;