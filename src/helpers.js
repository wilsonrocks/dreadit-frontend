import {BASE_URL} from './constants';

export function getDetailsFromUserId (userId) {
    if (localStorage[userId]) return Promise.resolve(JSON.parse(localStorage[userId]));

    else {
        fetch(`${BASE_URL}/users/${userId}`)
        .then(response => response.json())
        .then( ({user: {name, avatar_url}}) => {
            localStorage[userId] = JSON.stringify({name, avatar_url});
            return ({name, avatar_url});
        });
    }
}