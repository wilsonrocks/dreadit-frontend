import React from 'react';
import logo from './assets/drawing.svg'
import {Link} from 'react-router-dom'


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
    </section>
    );
}

export default NavBar;