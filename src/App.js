import React from 'react';
import Article from './Article';
import logo from './assets/drawing.svg'
import "bulma/css/bulma.css";
import "./news.css";


function App () {
    return (

    <div className="app">

      <section >
      
      <nav className="navbar">
      
      <div className="navbar-brand logo-with-words">  
        <img src={logo} className="logo"/>
        <span className="title dreadit">DREADIT</span>
      </div>

        <div className="level-item">

            <a className="navbar-item">Latest</a>
            <a className="navbar-item">Hottest</a>
            <a className="navbar-item">Authors</a>
            </div>
          </nav>

      </section>
      <Article _id="5b340bb9f0ac620014eca86f"/>
    </div>
    );
  };

export default App;