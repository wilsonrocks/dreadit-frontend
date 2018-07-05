import React from 'react';
import {BASE_URL} from './constants';

class NewArticle extends React.Component {

    state = {
        writingAs: '',
        title: '',
        body:'',
        authors: [],
    }

    componentDidMount () {
        fetch(`${BASE_URL}/users`)
        .then(response => response.json())
        .then(({users}) => this.setState({authors:users}));
    }

    render () {
        const {body, authors} = this.state;
        return (
        <div>
            Writing as:
                <select>
                    {authors.map(author=> (
                    <option
                        value={author._id}
                        > {author.name}</option>
                ))}
                </select>

            Title: <input
                type="text"
                onChange={({target:{value}}) => this.setState({title:value})}/>

            Article: <textarea
                value={body}
                placeholder={'Write your article here.'}
                onChange={({target:{value}}) => this.setState({body:value})}/>
        
        
        </div>
        );
    }
}

export default NewArticle;
