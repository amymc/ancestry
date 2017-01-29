import React from 'react';
import CollectionsList from './collectionslist';
import SubscriptionBlock from './subscriptionblock';
import '../styles/modules/sidebar.css';

const Sidebar = (props) => {
  return (
    <aside className="sidebar">
      <CollectionsList />
      <SubscriptionBlock onClick={props.onClick}/>
    </aside>
  );
}

export default Sidebar;