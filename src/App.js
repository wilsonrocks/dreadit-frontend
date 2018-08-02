import React from 'react';

import AllArticles from './AllArticles';
import Article from './Article';
import Topic from './Topic';
import Author from './Author';
import NavBar from './Navbar';
import NewArticle from './NewArticle';
import {NotFound} from './Error';

import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import "bulma/css/bulma.css";
import "./news.css";

function App () {
    return (
    <BrowserRouter>
      <div className="app">
        <NavBar/>
        <Switch>

          <Redirect exact from="/" to="/articles"/>

          <Route exact path="/articles" component={AllArticles}/>
          <Route path="/articles/:_id" component={Article}/>
          <Route path="/topics/:_id" component={Topic}/>
          <Route path="/authors/:_id" component={Author}/>
          <Route exact path="/new" component={NewArticle}/>

          <Route component={NotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
    );
  };

export default App;