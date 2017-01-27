import React, { Component } from 'react';
import CollectionsList from './collectionslist';
import SubscriptionBlock from './subscriptionblock';
//import '.././styles/header.css';

class Sidebar extends Component {
  render() {
    return (
      <aside className="sidebar">
        <CollectionsList />
        <SubscriptionBlock />
      </aside>
    );
  }
}

export default Sidebar;