import React from 'react';

import ArticleList from './ArticleList';
import Authors from './Authors';
import Topics from './Topics';
import Article from './Article';
import NotFound from './NotFound';

import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';

import "bulma/css/bulma.css";


import logo from './assets/drawing.svg'
import "./news.css";


function NavBar () {
  return (
  <section>
    <nav className="navbar">
      <div className="navbar-brand logo-with-words">  
        <Link to="/latest"> <img src={logo} alt="" className="logo"/></Link>
        <Link to="/latest"><span className="title dreadit">DREADIT</span></Link>
      </div>
      <div className="level-item">
        <Link to="/latest" className="navbar-item">Latest</Link>
        <Link to="/hottest" className="navbar-item">Hottest</Link>
        <Link to="/authors" className="navbar-item">Authors</Link>
        <Link to="/topics" className="navbar-item">Topics</Link>
      </div>
    </nav>
  </section>);
}

function App () {
    return (
    <BrowserRouter>
      <div className="app">
        <NavBar/>
        <Switch>
          <Redirect from="/" to="/latest"/>
          <Route path="/latest" component={ArticleList}/>

          <Route path="/hottest" component={ArticleList}/>
          <Route path="/authors" component={Authors}/>
          <Route path="/topics" component={Topics}/>
          <Route path="/article/:_id" component={Article}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
    );
  };

export default App;