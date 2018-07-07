import React from 'react';

import {BASE_URL} from './constants';


class AddComment extends React.Component{

  state = {
    active: false,
    body: '',
  }

  submitComment = (event) => {
    event.preventDefault();
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
      else throw new Error('problemSubmittingComment');
      return response.json()
    })
    .then(({created}) => {
      this.props.optimisticallyAddComment(created)
      this.setState({body:''});
    });
  }

  handleKeys = event => {
    if (event.key === 'Enter') this.submitComment();
  }

  render () {
    const {body, active} = this.state;
    if (active) return (
      <form>
        <input
          type="text"
          className="input field"
          autoFocus
          onChange={({target:{value}}) => this.setState({body:value})}
          onKeyPress={this.handleKeys}
          value={body}
        />
      <div className="field is-grouped">
        <button
          type="button"
          className="button control"
          onClick={this.submitComment}
          disabled={!body}
        >
          Submit Comment
        </button>

        <button
          type="button"
          className="button control"
          onClick={()=>this.setState({active:false, body:''})}
        >
          Cancel
        </button>
      </div>

      </form>
    );

    else return (

      <button
        className="button control"
        onClick={()=>this.setState({active:true})}
      >
        New Comment
      </button>

    );

  }
}

export default AddComment;
