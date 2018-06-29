import React from 'react';
import Avatar from './Avatar';
import CommentList from './CommentList';
import {BASE_URL} from './constants';
import {getDetailsFromUserId, getDetailsFromTopicId} from './helpers';

class Article extends React.Component {

    state = {
      article: null,
    };
  
    componentDidMount () {
        const {_id} = this.props;
        fetch(`${BASE_URL}/articles/${_id}`)
            .then(response => response.json())
            .then(article => this.setState(article))
    };
  
    render () {
      const {article} = this.state;
      return article ? <DisplayArticle {...article}/>:null;
    };
  }

class DisplayArticle extends React.Component {
    
    state = {
        name: null,
        topic: null,
        avatar_url: null,
        comments: [],
    };

    componentDidMount () {
        const {_id, created_by, belongs_to} = this.props;

        fetch(`${BASE_URL}/articles/${_id}/comments`)
        .then(response => response.json())
        .then(({comments}) => this.setState({comments}));

        getDetailsFromUserId(created_by)
        .then(details => this.setState(details));

        getDetailsFromTopicId(belongs_to)
        .then(details => this.setState(details));

    };

    changeVoting = (_id, delta) => {
        const {comments} = this.state;
        
        const newComments =
            comments.map(comment => {
                const changedVote = comment.votes + (delta > 0 ? 1 : -1);
                return (comment._id === _id) ? {...comment, votes:changedVote} : comment;
            });

        this.setState({comments: newComments});
    };

    render () {
        const {title, body} = this.props
        const {topic, name, avatar_url, comments} = this.state;

        return (
            <div className="article section">
                <p className="is-size-3"> {topic} </p>
                <h1 className="title">{title}</h1>
                <h2 className="subtitle"><Avatar avatar_url={avatar_url}/>{name}</h2>
                <p>{body}</p>
                <CommentList comments={comments} changeVoting={this.changeVoting}/>
            </div>
        );
    };
}

export default Article;