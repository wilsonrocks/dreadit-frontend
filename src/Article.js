import React from 'react';
import Avatar from './Avatar';

import CommentList from './CommentList';
import NotFound from './NotFound';
import ServerError from './ServerError';

import {BASE_URL} from './constants';

class Article extends React.Component {

    state = {
      article: null,
      error: null,
    };

    componentDidMount () {
        const {_id} = this.props.match.params;
        fetch(`${BASE_URL}/articles/${_id}`)
            .then(response => {
                if (response.ok) return response.json();
                else throw new Error(response.status)
            })
            .then(({article}) => {
                this.setState({article}, () => {
                    document.title = this.state.article.title;
                });
            })
            .catch(({message}) => {
                this.setState({error: message});
            });
    };

    render () {
      const {article, error} = this.state;
      if (error === '500') return <ServerError/>;
      if (error) return <NotFound/>;
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
        const {_id, belongs_to} = this.props;
        const {created_by: {avatar_url, name}} = this.props;

        fetch(`${BASE_URL}/articles/${_id}/comments`)
        .then(response => {
            return response.json()}
        )
        .then(({comments}) => this.setState({comments}));

        this.setState({avatar_url, name, topicName: belongs_to.title});
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

    optimisticallyAddComment = (comment) => {

        this.setState({comments:
            [...this.state.comments, comment]
        });

    }

    render () {
        const {title, body, _id} = this.props
        const {name, avatar_url, comments, topicName} = this.state;

        return (
            <div className="article section">
                <p className="is-size-3"> {topicName} </p>
                <h1 className="title">{title}</h1>
                <h2 className="subtitle"><Avatar avatar_url={avatar_url}/>{name}</h2>
                <p>{body}</p>
                <CommentList
                    comments={comments}
                    changeVoting={this.changeVoting}
                    _id={_id}
                    optimisticallyAddComment={this.optimisticallyAddComment}
                    />
            </div>
        );
    };
}

export default Article;