import React from 'react';

import Avatar from './Avatar.js';
import AuthorName from './AuthorName.js';

import {BASE_URL} from './constants.js';

class Authors extends React.Component {

  state = {
    authors: [],
  }

  componentDidMount () {
    fetch(`${BASE_URL}/users`)
    .then(response => response.json())
    .then(({users}) => this.setState({authors:users}));
  }

  render () {
    const {authors} = this.state;
    return (
      <div className="section">
        <table className="table is-hoverable">
          <tbody>
            {authors.map(
              ({name, avatar_url, _id}) => (
                <tr>

                  <td>
                    <Avatar
                      name={name}
                      avatar_url={avatar_url}
                      _id={_id}
                    />
                  </td>

                  <td>
                    <AuthorName
                      name={name}
                      _id={_id}
                    />
                  </td>

                  <td>
                    {"K"} articles
                  </td>

                  <td>
                    {"N"} total votes
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default Authors;
