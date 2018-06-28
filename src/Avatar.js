import React from 'react';

class Avatar extends React.Component {

    state = {
        wasError:false,
    }

    handleError = () => {
        this.setState({wasError: true});
    }

    render () {
        const {avatar_url, name} = this.props;
        const {wasError} = this.state;
        if (wasError) return null;
        else {
            return (
                <figure className="image is-64x64 is-inline-block">
                    <img
                        src={avatar_url}
                        alt={name}
                        onError={this.handleError}/>
                </figure>
            );
        }
    }
}

export default Avatar;