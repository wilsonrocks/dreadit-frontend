import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'



class Votes extends React.Component {

    state = {
        vote: 'null',
    }

    componentDidMount () {
        this.setState({
            vote: window.localStorage[this.props.id] || null,
        });
    }

    voteUp = event => {
        this.setState({vote: 'up'});
        window.localStorage[this.props.id] = 'up'
    }

    voteDown = event => {
        this.setState({vote: 'down'});
        window.localStorage[this.props.id] = 'down'

    }

    render () {
        const {votes, onChange} = this.props;
        return (
            <div>
                <div>
                <FontAwesomeIcon
                    className={`thumb ${this.state.vote === 'up' ? 'yes-vote': null}`}
                    icon={faThumbsUp}
                    onClick={this.voteUp}
                />
                {votes}
                <FontAwesomeIcon
                    className={`thumb ${this.state.vote === 'down' ? 'no-vote': null}`}
                    icon={faThumbsDown}
                    onClick={this.voteDown}
                />
                </div>
            </div>
        );
    }
}



export default Votes;