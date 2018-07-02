import React from 'react';
import {Link} from 'react-router-dom';

function ServerError () {
return (
    <div>
        <p className="title">This is embarrassing!</p>
        <p className="subtitle">Something went wrong at our end.</p>
        <p> This shouldn't have happened. Please let us know at <a href="mailto://errors@dreadit.com">errors@dreadit.com</a>
            You can try going to <Link to="/">our homepage</Link>.</p>
    </div>
);
}

export default ServerError;