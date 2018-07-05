import React from 'react';

import ArticleList from './ArticleList';
import NavBar from './Navbar';
import Authors from './Authors';
import Topics from './Topics';
import Article from './Article';
import NotFound from './NotFound';

import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import "bulma/css/bulma.css";
import "./news.css";



function App () {
    return (
    <BrowserRouter>
      <div className="app">
        <NavBar/>
        <Switch>
          <Redirect exact from="/" to="/latest"/>
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