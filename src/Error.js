import React from 'react';
import {Link} from 'react-router-dom';

export function NotFound () {
  return (
    <div>
      <p className="title">404</p>
      <p className="subtitle">We don't have what you wanted, sorry!</p>
      <p> We don't have anything for the page at <em>{window.location.href}</em>. </p>
      <p> Perhaps you would like to check out some <Link to="/">cool articles</Link> instead?</p>
    </div>
  );
}

export function ServerError () {
  return (
      <div>
          <p className="title">This is embarrassing!</p>
          <p className="subtitle">Something went wrong at our end.</p>
          <p> This shouldn't have happened. Please let us know at <a href="mailto://errors@dreadit.com">errors@dreadit.com</a></p>
          <p>You can try going to <Link to="/">our homepage</Link>.</p>
      </div>
  );
}

export function TopicError ({_id}) {
  return (
  <div className="section">
    We don't appear to have any articles for the topic with ID {_id}.
    This is most likely a copy and pasting error. There are lots of articles <Link to="/articles">here</Link>.
  </div>);
}

export default function Error ({status}) {
  return status === "500" ? <ServerError/> : <NotFound/>;
}
