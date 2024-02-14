# Create React Register/Login Project

This CLI tool, `create-react-register-login`, simplifies setting up a fullstack React application with secure user authentication. It scaffolds a project that uses Passport/Bcrypt for encryption and provides basic navigation between pages, leveraging [TailwindCSS](https://tailwindcss.com/) for modern and responsive design.

## Features

- **Scaffolds a Fullstack React Application**: Automatically creates a project with a React frontend and a Node.js/Express backend.
- **Secure User Authentication**: Integrates Passport.js for flexible and secure user authentication, along with bcrypt for password hashing and salting.
- **Pre-styled Components**: Utilizes TailwindCSS for a sleek, responsive design right out of the box.
- **Easy Database Connection**: While the template stores user credentials in local storage for demonstration, it's designed for easy connection to any database of your choice for production use.

## Quick Start

To create a new project with `create-react-register-login`, run:

```
npx create-react-register-login my-project
```

This command creates a new directory called my-project with the fullstack setup. Navigate into your new project directory to get started:

cd my-project

## To run the project from root folder and start both fronend and server, this require "concurrently" packages:

- npm install
- npm start
- open your default web browser to http://localhost:3000
- register a user, credentials will be stored in local storage this should not be used in production, for production connect to any database of your choice
- login with the user you just registered and modify the app as you desire

## Alterantively, you can start both frontend and backend separately if you don't want to use "concurently" package:

## Backend Setup

- cd backend
- npm install
- node server.js # or nodemon server.js

## Frontend Setup

- cd frontend
- npm install
- npm start
- open your default web browser to http://localhost:3000
- register a user, credentials will be stored in local storage this should not be used in production, for production connect to any database of your choice
- login with the user you just registered and modify the app as you desire

## Project Structure

The CLI tool generates the following project structure:

my-project/
├── backend/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src/
│       ├── components/
│       │   ├── About.jsx
│       │   ├── Contact.jsx
│       │   ├── Footer.jsx
│       │   ├── Header.jsx
│       │   ├── Home.jsx
│       │   ├── Login.jsx
│       │   ├── Navigation.jsx
│       │   ├── ProtectedRoute.jsx
│       │   └── Register.jsx
│       ├── app.js
│       ├── App.test.js
│       ├── authContext.js
│       ├── index.js
│       ├── reportWebVitals.js
│       └── setupTests.js
├── .gitignore
├── package.json
└── README.md



