import React, { Component } from 'react';
import Comment from './Comment';
import "bulma/css/bulma.css"
import "./news.css"

const mock = {
  "created_at": 1454293795551,
  "votes": 11,
  "_id": "5b340bb9f0ac620014eca88e",
  "body": "Sit sequi odio suscipit. Iure quisquam qui alias distinctio eos officia enim aut sit. Corrupti ut praesentium ut iste earum itaque qui. Dolores in ab rerum consequuntur. Id ab aliquid autem dolore.",
  "belongs_to": "5b340bb9f0ac620014eca84c",
  "created_by": "5b340bb9f0ac620014eca847",
  "__v": 0
  };


class App extends Component {
  render() {
    
    return (
      <div className="section">
        <Comment
          timestamp={mock.created_at}
          votes={mock.votes}
          body={mock.body}
          name="Fake Name"
          avatarURL="http://s3.amazonaws.com/hiphopdx-production/2016/02/Chuck-D_02-11-2016.jpg"
          id={mock._id}
        />

      </div>
    );
  }
}

export default App;
