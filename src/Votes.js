import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';



class Votes extends React.Component {

    state = {
        vote: 'null',
    }

    componentDidMount () {
        this.setState({
            vote: window.localStorage[this.props._id] || null,
        });
    }

    currentVoteDelta () {
        return {up:1, down:-1}[this.state.vote] || 0;
    }

    voteUp = () => {
        const {vote} = this.state;
        const {_id, onChange} = this.props;
        
        if (vote === 'up') {
            this.setState({vote: null});
            window.localStorage.removeItem(_id);
            onChange(-1);
        }
        else {
            const priorVotes =  this.currentVoteDelta();
            this.setState({vote: 'up'});
            window.localStorage[_id] = 'up';
            onChange(1 - priorVotes);
        }
    }

    voteDown = () => {
        const {vote} = this.state;
        const {_id, onChange} = this.props;

        if (vote === 'down') {
            this.setState({vote: null});
            window.localStorage.removeItem(_id);
            onChange(1)
        }

        else {
            const priorVotes =  this.currentVoteDelta();
            this.setState({vote: 'down'});
            window.localStorage[_id] = 'down';
            onChange(-1 - priorVotes);
        }

    }

    render () {
        const {votes} = this.props;
        return (
            <div className="votes">
                <div>
                <span className="icon">
                    <FontAwesomeIcon
                        className={`pointer ${this.state.vote === 'up' ? 'yes-vote': null}`}
                        icon={faThumbsUp}
                        onClick={this.voteUp}
                    />
                </span>

                {votes}

                <span className="icon">
                    <FontAwesomeIcon
                        className={`pointer ${this.state.vote === 'down' ? 'no-vote': null}`}
                        icon={faThumbsDown}
                        onClick={this.voteDown}
                    />
                </span>

                </div>
            </div>
        );
    }
}



export default Votes;