# Flashcards

![flashcardsGIF](https://user-images.githubusercontent.com/72525469/110542194-0b68ec80-8129-11eb-9f9b-533f287f78a9.gif)


## About project

You need to register and login. After login you are able to create categories. Categories are used to
sort added flashcards (example category: english words). After choosing category you can start new learning session.
Learning contains all flashcards from selected category in random order. You can comeback to previous sessions or start new ones.
Frontend implementation off backend running on java https://github.com/Siencode/Flashcards-Spring-API

## Tech

- react
- redux - state managmnet
- axios - handling request
- toastify - server response nortifications
- react router -  declarative routing


## Installation

Download and install: 
- npm from https://www.npmjs.com/get-npm

And run those comands in project directory:
```sh
git clone https://github.com/marmichno/flashcards.git
npm install
```

This project also requires to download and install:
- java 11 from  https://www.oracle.com/pl/java/technologies/javase-jdk11-downloads.html

To start backend server run those comands:
```sh
git clone https://github.com/Siencode/Flashcards-Spring-API
mvnw spring-boot:run
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
