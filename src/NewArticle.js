import React from 'react';
import {BASE_URL} from './constants';

class NewArticle extends React.Component {

  state = {
    writingAs: '',
    title: '',
    topic: '',
    body:'',
    authors: [],
    availableTopics: [],
  }

  componentDidMount () {
    fetch(`${BASE_URL}/users`)
    .then(response => response.json())
    .then(({users}) => this.setState({authors:users}));

    fetch(`${BASE_URL}/topics`)
    .then(response => response.json())
    .then(({topics}) => this.setState({availableTopics: topics}))
  }

  render () {
    const {body, authors, availableTopics} = this.state;
    return (
    <div className="section">
      <form>
        <div className="field">
        <label className="label">
          Writing as
        </label>
          <select
            className="select"
            value={this.state.writingAs}
            onChange={({target:{value}})=>this.setState({writingAs:value})}
          >

            <option default disabled value='' >Choose Author</option>

            {authors.map(({_id, name}) => (
              <option
                value={_id}
                key={_id}
              >
                {name}
              </option>
            ))}

          </select>
        </div>

        <div className="field">
          
          <label className="label">
            Topic
          </label>
          
          <select
            className="select"
            onChange={({target:{value}})=>this.setState({topic:value})}
            value={this.state.topic}
          >
            <option value="" disabled>Choose topic</option>
            {availableTopics.map(({_id, title}) => (
              <option
                value={_id}
                key={_id}

              >
                {title}
              </option>
            ))}
          </select>
        </div>


        <div className="field">
          <label className="label">
            Title
          </label>
          <div className="control">
            <input
              type="text"
              className="input"
              onChange={({target:{value}}) => this.setState({title:value})}
              placeholder={"What is it about?"}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">
            Article
          </label>
          
          <textarea
            className="textarea"
            value={body}
            placeholder={'Write your article here.'}
            onChange={({target:{value}}) => this.setState({body:value})}/>
        </div>
            
        <div className="control">
          <button className="button">
            Submit Article
          </button>
        </div>

      </form>
    </div>
    );
  }
}

export default NewArticle;
