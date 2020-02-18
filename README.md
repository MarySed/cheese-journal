# Cheese Journal

This project was created during my time as a student at [Code Chrysalis](https://www.codechrysalis.io).

## Introduction

"Cheese Journal" was created as a free and portable alternative to pen & paper cheese journals! You can record all the detals of your favorite cheeses and also access a database of over 900 varieties of cheese to expand your palate. The more cheese the better, right?

Created in 48 hours.

![Cheesegif](assets/cheeseapp.gif)

## Scripts Guide

```
yarn build
yarn start
```

If you run yarn build, wait for it to create a build of your project, and then run yarn start, you'll be able to both (1) test the API and (2) see any style updates made in the time leading up to yarn build's execution.

Please don't change `yarn start` or you will be unable to deploy to Heroku.

This is recommended for devs who are working on updating the backend or server of this app.

```
yarn dev
```

If you run yarn dev, you'll be able to see any style changes you make when you refresh the page.

```
yarn nodemon start server/index.js
```

This command, meanwhile, creates a hot-reloading server that updates each time you save. This is recommended for people working on frontend/design edits.

## Technology Used

Cheese Journal was created using PostgreSQL, Knex.js, Express, Node.js, and React. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
