# Dreadit Website

Dreadit is a news aggregation website, similar to Reddit, which allows users to post and vote on articles and comments. It is a single page web app, which calls the RESTFUL api backend [LINK](https://github.com/backend).


## Installation

    git clone [LINK](https://github.com)
    cd dreadit
    npm install

## Running

To run the development server, type `npm run start`
This will serve the website on `localhost:3000` and open up a web browser to view it. Not that this version is not safe for production.

## Production
To build the production version type `npm run build`. This will generate the production version of the site inthe `build` folder. As the website uses `react-router-dom` to change URLs on the fly, this folder cannot be served statically. You will need to make sure that all URLs are handled by the react app, otherwise urls with `/latest` on the end will result in a 404. This can be done by using nginx or apache proxying, or through using the `create-react-app` [buildpack](https://link.to.buildpack) if you are deploying on heroku.

## Dependencies

This was created with `create-react-app` but it is not needed to run the website.

It was built with React version 16.4.1 and React Router version 4.3.1 but is likely to work with other versions.

## Limitations
There is currently no user identification or authentication - creating a comment or an article assigns a random user from the database as author.