import React from 'react';
import Votes from './Votes';
import Avatar from './Avatar';
import moment from 'moment';
import {getDetailsFromUserId} from './helpers';

const onChange = voteDelta => console.log(`Score changed by ${voteDelta}`);

class Comment extends React.Component {

    state = {};

    componentDidMount () {
        const {created_by} = this.props;

        getDetailsFromUserId(created_by)
        .then(details => this.setState(details));

    }


    render () {
        const {created_at, votes, body, _id} = this.props;
        const {avatar_url, name} = this.state;
        return (
            <div className="media">

                <div className="user media-left has-text-centered">
                    <Avatar {...{avatar_url, name}}/>
                    <p>{name}</p>
                    <p>{moment(created_at).fromNow()}</p>
                </div>

                <div className="media-content">
                    {body}
                    <Votes
                        onChange={onChange}
                        votes={votes}
                        _id={_id}
                    />
                </div>
            </div>
        );
    }
}


export default Comment;