import React from 'react';
import Comment from './Comment'

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
  };

  changeOrder = ({target:{value}}) => {
    value = (value === 'time') ? 'created_at' : value;
    this.setState({orderBy:value});
  };

  render () {
    const {comments} = this.props;
    const sortedComments = sortItems(comments, this.state.orderBy);

    return (
      <div className="comment-list section">
        <p className="is-size-5">Comments</p>
        <div className="level">
          <div className="level-left">
            <OrderDropDown className="level-item" onChange={this.changeOrder}/>
          </div>
        </div>

        {sortedComments.map(comment => {
          return <Comment
            {...comment}
            key={comment._id}
          />
        })}
      </div>
    );
  }
}

export default CommentList;
