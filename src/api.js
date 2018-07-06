import {BASE_URL} from './constants';

export function getArticleFromId (_id) {
  
  return fetch(`${BASE_URL}/articles/${_id}`)

  .then(response => {
    if (response.ok) return response.json();
    else throw new Error(response.status);
  })

  .then(({article}) => {
    const {_id, votes, title, body} = article;
    const {name: authorName, avatar_url: avatarUrl, _id: authorId} = article.created_by;
    const {title: topicName, _id: topicId} = article.belongs_to;
    return {article:{
      _id, votes, title, body, authorName, avatarUrl, topicName, topicId, authorId
    }}
  })

  .catch(({message: status}) => {
    return {status}
  });
  
}

export function getDetailsFromUserId (userId) {
  if (localStorage[userId]) return Promise.resolve(JSON.parse(localStorage[userId]));
  
  else {
    return fetch(`${BASE_URL}/users/${userId}`)
    .then(response => response.json())
    .then( ({user: {name, avatar_url}}) => {
      localStorage[userId] = JSON.stringify({name, avatar_url});
      return ({name, avatar_url});
    });
  }
}

export function getDetailsFromTopicId (topicId) {
  if (localStorage[topicId]) return Promise.resolve(JSON.parse(localStorage[topicId]));
  
  else {
    return fetch(`${BASE_URL}/topics`)
    .then(response => response.json())
    .then( ({topics}) => {
      const {slug,title} = topics.filter(topic => topic._id === topicId)[0]
      localStorage[topicId] = JSON.stringify({topic: title, slug});
      return ({topic:title, slug});
    });
  }
}

export function submitCommentVote (_id, vote) {
  return fetch(`${BASE_URL}/comments/${_id}?vote=${vote}`, {method: 'PUT'})
}