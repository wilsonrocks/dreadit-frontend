import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'


class Votes extends React.Component {

    render () {
        const {votes, id, onChange} = this.props;
        return (
            <div>
                <FontAwesomeIcon icon={faThumbsUp} onClick={onChange}/>
                {votes}
                <FontAwesomeIcon icon={faThumbsDown}/>
            </div>

        );
    }
}



export default Votes;