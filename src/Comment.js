import React from 'react';
import Votes from './Votes';
import moment from 'moment';

const onChange = voteDelta => console.log(`Score changed by ${voteDelta}`);

class Comment extends React.Component {
    render () {
        const {timestamp, votes, avatarURL, name, body, id} = this.props;
        return (
            <div className="media">

                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={avatarURL} alt={name}/>
                    </figure>
                    <p>{name}</p>
                    <p>{moment(timestamp).fromNow()}</p>
                </div>

                <div className="media-content">
                    {body}
                    <Votes
                        onChange={onChange}
                        votes={votes}
                        id={id}
                    />
                </div>
            </div>
        );
    }
}


export default Comment;