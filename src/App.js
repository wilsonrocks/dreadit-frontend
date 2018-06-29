import React from 'react';
import Article from './Article';
import "bulma/css/bulma.css"
import "./news.css"

const mockArticle = {
  "votes": 0,
  "_id": "5b340bb9f0ac620014eca84c",
  "title": "Running a Node App",
  "created_by": "5b340bb9f0ac620014eca848",
  "body": "This is part two of a series on how to get up and running with Systemd and Node.js. This part dives deeper into how to successfully run your app with systemd long-term, and how to set it up in a production environment.",
  "belongs_to": "5b340bb9f0ac620014eca849",
  "__v": 0
  };


function App () {
  return <Article {...mockArticle}/>;
}

export default App;