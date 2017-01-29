import React from 'react';

const CollectionsList = () => {
  return (
    <div className="block block--small">
      <h2 className="block__title">Featured Collections</h2>
      <ul className="block__body">
        <li className="block__list-item"><a className="link" href="#">U.S. World War II Army Enlistment Records</a></li>
        <li className="block__list-item"><a className="link" href="#">U.S. Civil War Soldiers, 1861-1865</a></li>
        <li className="block__list-item"><a className="link" href="#">WWII U.S. Navy Muster Rolls, 1938-1949</a></li>
        <li className="block__list-item"><a className="link" href="#">U.S. World War II Draft Registration Cards, 1942</a></li>
        <li className="block__list-item"><a className="link" href="#">U.S. Civil War Soldiers, 1861-1865</a></li>
      </ul>
      <button className="button button--secondary">See all collections</button>
    </div>
  );
}

export default CollectionsList;