import React from 'react';
import {Link} from 'react-router-dom';

function NotFound () {
return (
    <div>
        <p className="title">404</p>
        <p className="subtitle">We don't have what you wanted, sorry!</p>
        <p> We don't have anything for the page at <em>{window.location.href}</em>. </p>
        <p> Perhaps you would like to check out some <Link to="/">cool articles</Link> instead?</p>

    </div>

);
}

export default NotFound;