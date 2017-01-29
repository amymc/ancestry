import React from 'react';
//import '../styles/modules/subscriptionblock.css';

const SubscriptionBlock = (props) => {
  return (
    <div className="subscription-block block block--dark">
      <h2> Let us help you discover your story </h2>
      <p> Begin your free family tree with a few simple facts. We'll help you discover a lot more. Start your tree by subscribing today for a free trial.
      </p>
      <button className="button button--secondary" onClick={props.onClick}>Subscribe Today</button>
    </div>
  );
}

export default SubscriptionBlock;