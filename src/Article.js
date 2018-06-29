import React from 'react';
import Avatar from './Avatar';
import CommentList from './CommentList';
import {BASE_URL} from './constants';
import {getDetailsFromUserId, getDetailsFromTopicId} from './helpers';

class Article extends React.Component {
    
    state = {
        name: null,
        topic: 'cider',
        avatar_url: 'https://vignette.wikia.nocookie.net/mlpfanart/images/8/8e/Rainbow_Dash_by_Nethear.png/revision/latest?cb=20120530035934',
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

    render () {
        const {title, body} = this.props
        const {topic, name, avatar_url, comments} = this.state;
        return (
        <div className="article section">
            <p className="is-size-3"> {topic} </p>
            <h1 className="title">{title}</h1>
            <h2 className="subtitle"><Avatar avatar_url={avatar_url}/>{name}</h2>
            <p>{body}</p>
            <CommentList comments={comments}/>
        </div>);
    };
}

export default Article