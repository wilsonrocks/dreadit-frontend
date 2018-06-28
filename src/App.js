import React, { Component } from 'react';
import Votes from './Votes';
import "bulma/css/bulma.css"
import "./news.css"

class App extends Component {
  render() {
    return (
      <div>
        <Votes
          id="ID for something"
          votes={23}
          onChange={voteDelta => console.log(`Score changed by ${voteDelta}`)}
        />
      </div>
    );
  }
}

export default App;
