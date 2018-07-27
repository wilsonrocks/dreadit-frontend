import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';

class Votes extends React.Component {

    state = {
        vote: '',
    }

    componentDidMount () {
        this.setState({
            vote: window.localStorage[this.props._id] || '',
        });
    }

    currentVoteDelta () {
        return {up:1, down:-1}[this.state.vote] || 0;
    }

    vote = (direction) => {

        const {vote} = this.state;
        const {_id, onChange} = this.props;

        const newDelta = {up:1, down:-1}[direction];
        const oldDelta = this.currentVoteDelta();

        if (vote === direction) {
            this.setState({vote: ''});
            window.localStorage.removeItem(_id);
            onChange(-newDelta);
        }

        else {
            this.setState({vote: direction});
            window.localStorage.setItem(_id, direction);
            onChange(newDelta - oldDelta);
        }
    }

    render () {
        const {votes} = this.props;
        return (
            <div className="votes">
                <div>
                <span className="icon">
                    <FontAwesomeIcon
                        className={`pointer ${this.state.vote === 'up' ? 'yes-vote': ''}`}
                        icon={faThumbsUp}
                        onClick={() => this.vote('up')}
                    />
                </span>

                {votes}

                <span className="icon">
                    <FontAwesomeIcon
                        className={`pointer ${this.state.vote === 'down' ? 'no-vote': ''}`}
                        icon={faThumbsDown}
                        onClick={() => this.vote('down')}
                    />
                </span>

                </div>
            </div>
        );
    }
}

export default Votes;
