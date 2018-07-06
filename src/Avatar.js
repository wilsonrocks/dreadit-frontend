import React from 'react';

import {Link} from 'react-router-dom';

class Avatar extends React.Component {

    state = {
        wasError:false,
    }

    handleError = (err) => {
        this.setState({wasError: true});
    }

    render () {
        const {avatar_url, name, _id} = this.props;
        const {wasError} = this.state;
        if (wasError) return null;
        else {
            return (
                <Link to={`/authors/${_id}`}>
                    <figure className="image is-64x64 is-inline-block">
                        <img
                            src={avatar_url}
                            alt={name}
                            onError={this.handleError}/>
                    </figure>
                </Link>
            );
        }
    }
}

export default Avatar;