import React from 'react';

const SubscriptionBlock = (props) => {
  return (
    <div className="subscription-block block block--small block--dark">
      <h2 className="block__title"> Let us help you discover your story </h2>
      <p className="block__body"> Begin your free family tree with a few simple facts. We'll help you discover a lot more. Start your tree by subscribing today for a free trial.
      </p>
      <button className="button button--secondary" onClick={props.onClick}>Subscribe Today</button>
    </div>
  );
}

export default SubscriptionBlock;