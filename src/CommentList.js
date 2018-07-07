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
      <div className="comment-list">
        
        <form>
          <div className="field is-horizontal">
            <span className="is-size-5 field-label">Comments</span>
            <OrderDropDown className="level-item field-body" onChange={this.changeOrder} entries={orders}/>
          </div>
        </form>
        
        <AddComment
          _id={_id}
          optimisticallyAddComment={optimisticallyAddComment}
          optimisticallyDeleteComment={optimisticallyDeleteComment}
        />


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
