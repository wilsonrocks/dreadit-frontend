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
      if (!response.ok) throw new Error('problemSubmittingComment');
      return response.json()
    })
    .then(({created}) => {
      this.props.addCommentToState(created)
      this.setState({body:'', active: false});
    });
  }

  render () {
    const {body, active} = this.state;
    if (active) return (
      <form onSubmit={this.submitComment}>
        <input
          type="text"
          className="input field"
          autoFocus
          onChange={({target:{value}}) => this.setState({body:value})}
          value={body}
        />
        <div className="field is-grouped">
          <button
            type="submit"
            className="button control"
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
