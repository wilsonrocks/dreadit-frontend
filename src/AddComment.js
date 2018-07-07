import React from 'react';

import {BASE_URL} from './constants';


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
    if (this.state.active) return (
      <form>
        <input
          type="text"
          className="input field"
          autoFocus
          onChange={({target:{value}}) => this.setState({body:value})}
          onKeyPress={this.handleKeys}
          value={this.state.body}
        />
      <div className="field is-grouped">
        <button
          className="button control"
          onClick={this.submitComment}
        >
          Submit Comment
        </button>
        <button
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
      onClick={()=>this.setState({active:true})}>
      {/* <FontAwesomeIcon icon={faPlus}/> */} New Comment
      </button>
      
    );
    
  }
}

export default AddComment;
