import React, { Component } from 'react';
import '.././styles/modules/mainarticle.css';

class MainArticle extends Component {
  render() {
    return (
      <div className="main-article__wrapper">
        <article className="main-article">
          <h1 className="main-article__title">
            World conflicts. Personal stories.
          </h1>
          <p className="main-article__body">
            Throughout history, millions of courageous men and women have served and protected their country in times of conflict. Were your ancestors among them? It's never been easier to find out on Ancestry.com, the world's largest online collection of family history resources, including millions of military records spanning from before the Revolutionary War all the way up to Vietnam.
          </p>
          <img className="" alt="" src=""/>
          <p className="main-article__body">
            Search through enlightening historical documents from every major U.S. war from the American Revolution through Vietnam, including draft registration cards, veterans gravesites, soldier pension indexes, enlistment records, muster rolls and much more.
          </p>
        </article>
        <button className="button button--primary">Search all military records</button>
      </div>
    );
  }
}

export default MainArticle;