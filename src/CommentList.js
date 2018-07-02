import React from 'react';
import Comment from './Comment'
import AddComment from './AddComment';

function OrderDropDown ({onChange}) {
  return (
    <div className= "select" onChange={onChange}>
      <select>
        <option value="time">Newest</option>
        <option value="votes">Most Votes</option>
      </select>
    </div>
  );
}

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
    const {comments, changeVoting, _id, optimisticallyAddComment} = this.props;
    const sortedComments = sortItems(comments, this.state.orderBy);

    return (
      <div className="comment-list section">


        <div className="level">
          <div className="level-left">
            <p className="is-size-5">Comments</p>
          </div>
          <div className="level-item">
          <OrderDropDown className="level-item" onChange={this.changeOrder}/>
          </div>
          <div className="level-item">
          <AddComment
            _id={_id}
            optimisticallyAddComment={optimisticallyAddComment}

          />
          </div>
        </div>

        {sortedComments.map(comment => {
          return <Comment
            {...comment}
            changeVoting = {changeVoting}
            key={comment._id}
          />
        })}
      </div>
    );
  }
}

export default CommentList;
