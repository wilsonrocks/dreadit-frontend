import React from 'react';
import {Link} from 'react-router-dom';

function AuthorName({name, _id}) {
    return (
        <p><Link
        to={`/topics/${_id}`}
        style={{color:'inherit'}}
        >{name}</Link></p>
    );
}

export default AuthorName;