import {BASE_URL} from './constants';

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