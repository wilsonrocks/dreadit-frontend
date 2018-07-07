import React from 'react';
import Avatar from './Avatar';
import AuthorName from './AuthorName';

import CommentList from './CommentList';
import TopicName from './TopicName';
import Error from './Error';

import {getArticleFromId, getCommentsFromArticleID} from './api';

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
    },
    comments: [],
    status: 200,
    commentError: false,
  }

  componentDidMount () {
    const {_id} = this.props.match.params;

    getArticleFromId(_id)
    .then(newState => this.setState(newState));

    getCommentsFromArticleID(_id)
    .then(newState => {
      if (newState.status !== undefined) this.setState({commentError: true});
      else this.setState(newState);
    });

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
    const {status, commentError} = this.state;
    if (status !== 200) return <Error status={status}/>;

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
          <Avatar
            avatar_url={avatarUrl}
            name={authorName}
            _id={authorId}
          />
          <AuthorName name={authorName} _id={authorId}/>
          </h2>
          <p>{body}</p>

          {commentError
          ?
          <p> Problem retrieving Comments </p>
          :
          <CommentList
            comments={comments}
            changeVoting={this.changeVoting}
            _id={_id}
            optimisticallyAddComment={this.optimisticallyAddComment}
            optimisticallyDeleteComment={this.optimisticallyDeleteComment}
          />
          }


        </div>
      );
    }

  }

  export default Article;