import React from 'react';

import ArticleList from './ArticleList';
import NavBar from './Navbar';
import NewArticle from './NewArticle';
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
          <Redirect exact from="/" to="/articles`"/>

          <Route exact path="/articles" component={ArticleList}/>

          <Route path="/authors/:_id" render = {({match}) =>(
            <Redirect to={{
              pathname: '/articles',
              state: {authorFilter: match.params._id}
            }}/>
          )} />

          <Route path="/topics/:_id" render = {({match}) =>(
            <Redirect to={{
              pathname: '/articles',
              state: {topicFilter: match.params._id}
            }}/>
          )} />

          <Route path="/articles/:_id" component={Article}/>

          <Route exact path="/new" component={NewArticle}/>

          <Route component={NotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
    );
  };

export default App;