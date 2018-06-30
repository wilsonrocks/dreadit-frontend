import React from 'react';

import {BASE_URL} from './constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus }  from '@fortawesome/free-solid-svg-icons';

class AddComment extends React.Component{

    state = {
        active: false,
        body: '',
    }

    submitComment = () => {
        const {_id} = this.props;
        const {body} = this.state;

        fetch(`${BASE_URL}/articles/${_id}/comments`,
            {
                method: 'POST',
                body: JSON.stringify({comment:body}),
                headers: {
                    'content-type': 'application/json'
                }
            })
        .then(response => {
            if (response.ok) {
                this.setState({active:false});
            }
        });
    }

    render () {
        if (this.state.active) return (
        <div>
            <textarea
                className="textarea"
                autoFocus
                onChange={({target:{value}}) => this.setState({body:value})}
                value={this.state.body}
            />

            <button
                className="button"
                onClick={this.submitComment}>
                    Submit Comment
            </button>
            <button
                className="button"
                onClick={()=>this.setState({active:false, body:''})}>
                Cancel
            </button>

        </div>
        );

        else return (

        <button
            className="button"
            onClick={()=>this.setState({active:true})}>
            <FontAwesomeIcon icon={faPlus}/> Add Comment
        </button>

        );

    }
}

export default AddComment;
