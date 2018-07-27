# Dreadit Website

Dreadit is a news aggregation website, similar to Reddit, which allows users to post and vote on articles and comments. It is a single page web app, which calls the RESTFUL api backend https://github.com/wilsonrocks/BE-PT-northcoders-news.git.

There is a live version hosted at https://dreadit.herokuapp.com


## Installation

    git clone https://github.com/wilsonrocks/FE-PT-northcoders-news.git
    cd dreadit
    npm install

## Running

To run the development server, type `npm run start`
This will serve the website on `localhost:3000` and open up a web browser to view it. Note that this version is not safe for production.

## Dependencies

This was created with `create-react-app` but it is not needed to run the website.

It was built with React version 16.4.1 and React Router version 4.3.1 but is likely to work with other versions.

It also leverages Moment.js and Bulma and Font-Awesome for Styling.

## Extra Info
Creating a comment or an article assigns a random user from the database as author.