import React from 'react';
import Comment from './Comment'
import AddComment from './AddComment';
import OrderDropDown from './OrderDropDown';
import {getCommentsFromArticleID} from './api';

const orders = [
  {value: 'time', text:'Newest'},
  {value: 'votes', text:'Most Votes'},
];

function sortItems (items, field) {
  return items.sort( (a,b) => {
    return Number(b[field]) - Number(a[field]);
  });
}

class CommentList extends React.Component {

  state = {
    orderBy: 'created_at',
    refresh: false,
    comments: [],
    status: 200
  };

  componentDidMount () {
    const {_id} = this.props;

    getCommentsFromArticleID(_id)
    .then(newState => this.setState(newState));
  }

  changeOrder = ({target:{value}}) => {
    value = (value === 'time') ? 'created_at' : value;
    this.setState({orderBy:value});
  };

  optimisticallyDeleteComment = (_id) => {
    this.setState({comments:
      this.state.comments.filter(comment => comment._id !== _id)
    });
  }

  optimisticallyAddComment = (comment) => {
    this.setState({comments:
      [...this.state.comments, comment]
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

  render () {

    const {status} = this.state;

    if (status !== 200) return (
      <div>
        <p className="is-size-5">Comments</p>
        <p className="has-text-danger"> Problem retrieving comments </p>
      </div>
    );

    const {_id} = this.props;
    const {comments} = this.state
    const sortedComments = sortItems(comments, this.state.orderBy);

    return (
      <div className="comment-list">
        <p className="subtitle">Comments</p>

        <form>
            <OrderDropDown onChange={this.changeOrder} entries={orders}/>
        </form>

        <AddComment
          _id={_id}
          optimisticallyAddComment={this.optimisticallyAddComment}
        />

        {sortedComments.map(comment => {
          return <Comment
            {...comment}
            changeVoting = {this.changeVoting}
            articleId = {_id}
            key={comment._id}
            optimisticallyDeleteComment={this.optimisticallyDeleteComment}
          />
        })}
      </div>
    );
  }
}

export default CommentList;
