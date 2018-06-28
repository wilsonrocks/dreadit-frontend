import React, { Component } from 'react';
import Votes from './Votes';
import "bulma/css/bulma.css"

class App extends Component {
  render() {
    return (
      <div>
        <Votes
          id="ID for something"
          votes={239768}
          onChange={() => console.log('voted!')}
        />
      </div>
    );
  }
}

export default App;
