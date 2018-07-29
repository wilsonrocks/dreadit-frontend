import React from 'react';
import Votes from './Votes';
import Avatar from './Avatar';
import AuthorName from './AuthorName';

import moment from 'moment';
import {
    getDetailsFromUserId,
    submitCommentVote,
    deleteCommentWithId} from './api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class Comment extends React.Component {

    state = {};

    componentDidMount () {
        const {created_by} = this.props;

        getDetailsFromUserId(created_by)
        .then(details => this.setState(details));
    }

    onChange = voteDelta => {
        const {_id} = this.props;
        if (voteDelta !== 0) {
            const vote = voteDelta > 0 ? 'up' : 'down';
            const times = Math.abs(voteDelta);
            for (let i = 0; i < times; i++) {
                submitCommentVote(_id, vote)
                .then(response => {
                    if (response.ok) this.props.changeVoting(this.props._id, vote === 'up' ? 1 : -1);
                });
            }
        }
    }

    deleteComment = (_id) => {
        deleteCommentWithId(_id)
        .then(response => {
            if (response.status === undefined) this.props.deleteCommentFromState(_id);
        });
    }

    render () {
        const {created_at, votes, body, _id, created_by} = this.props;
        const {avatar_url, name} = this.state;
        return (
            <div className="media">

                <div className="user media-left has-text-centered">
                    <Avatar
                    avatar_url={avatar_url}
                    name={name}
                    _id={created_by}
                    />
                    <AuthorName name={name} _id={created_by}/>
                    <p>{moment(created_at).fromNow()}</p>
                </div>

                <div className="media-content">
                    {body}
                    <div>
                        <FontAwesomeIcon
                            className="pointer"
                            icon={faTrashAlt}
                            onClick={() => this.deleteComment(_id)}
                        />
                        <Votes
                            onChange={this.onChange}
                            votes={votes}
                            _id={_id}
                        />
                    </div>

                </div>
            </div>
        );
    }
}


export default Comment;
