import React from 'react';
import Avatar from './Avatar';
import AuthorName from './AuthorName';

import CommentList from './CommentList';
import TopicName from './TopicName';

import NotFound from './NotFound';
import ServerError from './ServerError';

import {BASE_URL} from './constants';
import { getDetailsFromTopicId } from './helpers';

class Article extends React.Component {

    state = {
        article: {
            _id: '',
            title: '',
            authorName: '',
            avatarUrl: '',
            body: '',
            topicName: '',
            topicId: '',
            votes: 0,
            commentCount: 0,
        },
        comments: [],
    }

    componentDidMount () {
        const {_id} = this.props.match.params;
        console.dir(this.state)
        
        fetch(`${BASE_URL}/articles/${_id}`)
        .then(response => response.json())
        .then(({article}) => {
            const {_id, votes, title, body} = article;
            const {name: authorName, avatar_url: avatarUrl, _id: authorId} = article.created_by;
            const {title: topicName, _id: topicId} = article.belongs_to;
            this.setState({article:{
                _id, votes, title, body, authorName, avatarUrl, topicName, topicId, authorId
            }})
            
        })
        .then(() => console.dir(this.state));

        fetch(`${BASE_URL}/articles/${_id}/comments`)
        .then(response => response.json())
        .then(({comments}) => this.setState({comments}));
    }


    changeVoting = (_id, delta) => {
        const {comments} = this.state;

        const newComments =
            comments.map(comment => {
                const changedVote = comment.votes + (delta > 0 ? 1 : -1);
                return (comment._id === _id) ? {...comment, votes:changedVote} : comment;
            });

        this.setState({comments: newComments});
    }

    optimisticallyAddComment = (comment) => {
        this.setState({comments:
            [...this.state.comments, comment]
        });
    }

    optimisticallyDeleteComment = (_id) => {
        this.setState({comments:
            this.state.comments.filter(comment => comment._id !== _id)
        });
    }

    render () {
        const {topicName, topicId, title, avatarUrl, authorName,
            authorId, body, _id} = this.state.article;
        const {comments} = this.state;
        return (
            <div className="article section">
                <TopicName
                    className="is-size-3"
                    name={topicName}
                    _id={topicId}
                />
                <h1 className="title">{title}</h1>
                 <h2 className="subtitle">
                     <Avatar avatar_url={avatarUrl}/>
                     <AuthorName name={authorName} _id={authorId}/>
                 </h2>
                  <p>{body}</p>
                  <CommentList
                      comments={comments}
                      changeVoting={this.changeVoting}
                      _id={_id}
                      optimisticallyAddComment={this.optimisticallyAddComment}
                      optimisticallyDeleteComment={this.optimisticallyDeleteComment}
                      />
            </div>
        );
    }

}

export default Article;