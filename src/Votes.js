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

    currentVoteDelta () {
        return {up:1, down:-1}[this.state.vote] || 0;
    }

    voteUp = event => {
        const {vote} = this.state;
        const {id, onChange} = this.props;
        
        if (vote === 'up') {
            this.setState({vote: null});
            window.localStorage.removeItem(id);
            onChange(-1);
        }
        else {
            const priorVotes =  this.currentVoteDelta();
            this.setState({vote: 'up'});
            window.localStorage[id] = 'up';
            onChange(1 - priorVotes);
        }
    }

    voteDown = event => {
        const {vote} = this.state;
        const {id, onChange} = this.props;

        if (vote === 'down') {
            this.setState({vote: null});
            window.localStorage.removeItem(id);
            onChange(1)
        }

        else {
            const priorVotes =  this.currentVoteDelta();
            this.setState({vote: 'down'});
            window.localStorage[id] = 'down';
            onChange(-1 - priorVotes);
        }

    }

    render () {
        const {votes} = this.props;
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