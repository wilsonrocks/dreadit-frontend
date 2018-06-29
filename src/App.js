import React from 'react';

import Latest from './Latest';
import Hottest from './Hottest';
import Authors from './Authors';
import Topics from './Topics';

import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import "bulma/css/bulma.css";


import logo from './assets/drawing.svg'
import "./news.css";


function NavBar () {
  return (
  <section>
    <nav className="navbar">
      <div className="navbar-brand logo-with-words">  
        <Link to="/"> <img src={logo} className="logo"/></Link>
        <Link to="/"><span className="title dreadit">DREADIT</span></Link>
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
          <Route exact path="/" component={Latest}/>
          <Route path="/latest" component={Latest}/>
          <Route path="/authors" component={Authors}/>
          <Route path="/topics" component={Topics}/>
          <Route path="/hottest" component={Hottest}/>
        </Switch>
      </div>
    </BrowserRouter>
    );
  };

export default App;