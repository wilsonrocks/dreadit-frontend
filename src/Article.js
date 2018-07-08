import React from 'react';
import Avatar from './Avatar';
import AuthorName from './AuthorName';

import CommentList from './CommentList';
import TopicName from './TopicName';
import Error from './Error';

import {getArticleFromId} from './api';

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
    status: 200,
  }

  componentDidMount () {
    const {_id} = this.props.match.params;

    getArticleFromId(_id)
    .then(newState => this.setState(newState));
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
    const {status} = this.state;

    if (status !== 200) return <Error status={status}/>;

    const {topicName, topicId, title, avatarUrl, authorName,
      authorId, body} = this.state.article;
    const {_id} = this.props.match.params;

      return (
      <div>
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

          </div>
        <div className="section">
        

          <CommentList
            changeVoting={this.changeVoting}
            _id={_id}
            optimisticallyAddComment={this.optimisticallyAddComment}
            optimisticallyDeleteComment={this.optimisticallyDeleteComment}
          />
        </div>
      </div>
      );
    }

  }

  export default Article;