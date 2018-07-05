import React from 'react';
import logo from './assets/drawing.svg'
import {NavLink} from 'react-router-dom'


function NavBar () {
    return (
    <section>
      <nav className="navbar">
        <div className="navbar-brand logo-with-words">  
          <NavLink to="/articles" activeClassName="selected"> <img src={logo} alt="" className="logo"/></NavLink>
          <NavLink to="/articles" activeClassName="selected"><span className="title dreadit">DREADIT</span></NavLink>
        </div>
        <div className="level-item">
          <NavLink to="/articles" activeClassName="selected" className="navbar-item">Read</NavLink>
          <NavLink to="/new" activeClassName="selected" className="navbar-item">Write</NavLink>
        </div>
      </nav>
    </section>
    );
}

export default NavBar;