import React from 'react';
import Comment from './Comment'
import AddComment from './AddComment';
import OrderDropDown from './OrderDropDown';

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
    refresh: false
  };

  changeOrder = ({target:{value}}) => {
    value = (value === 'time') ? 'created_at' : value;
    this.setState({orderBy:value});
  };



  render () {
    const {comments, changeVoting, _id, optimisticallyAddComment,
      optimisticallyDeleteComment} = this.props;
    const sortedComments = sortItems(comments, this.state.orderBy);

    return (
      <div className="comment-list section">
        <div>

        <span className="is-size-5">Comments</span>
        <AddComment
          _id={_id}
          optimisticallyAddComment={optimisticallyAddComment}
          optimisticallyDeleteComment={optimisticallyDeleteComment}

        />
        <OrderDropDown className="level-item" onChange={this.changeOrder} entries={orders}/>

        </div>

        {sortedComments.map(comment => {
          return <Comment
            {...comment}
            changeVoting = {changeVoting}
            articleId = {_id}
            key={comment._id}
            optimisticallyDeleteComment={optimisticallyDeleteComment}
          />
        })}
      </div>
    );
  }
}

export default CommentList;
