# Create a Fullstack React Auth Navigation Project

This CLI tool, `npx create-react-auth-nav`, simplifies setting up a fullstack React application with secure user authentication. It scaffolds a project that uses Passport/Bcrypt for encryption and provides basic navigation between pages, leveraging [TailwindCSS](https://tailwindcss.com/) for modern and responsive design.

![Register Page](/assets/register.jpg "Register page")
![Login Page](/assets/login.jpg "Login Page")

## Features

- **Scaffolds a Fullstack React Application**: Automatically creates a project with a React frontend and a Node.js/Express backend.
- **Secure User Authentication**: Integrates Passport.js for flexible and secure user authentication, along with bcrypt for password hashing and salting.
- **Pre-styled Components**: Utilizes TailwindCSS for a sleek, responsive design right out of the box.
- **Easy Database Connection**: While the template stores user credentials in local storage for demonstration, it's designed for easy connection to any database of your choice for production use.

## Quick Start

To create a new project with `create-react-auth-nav`, run:

```
npx create-react-auth-nav
```

This command creates a new directory called "react-register-fullstack" with the fullstack setup. Navigate into your new project directory to get started:

cd react-auth

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

```
react-auth/
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
```

## App 
![Register Page](/assets/register.jpg "Register page")
![Login Page](/assets/login.jpg "Login Page")
![Home Page](/assets/home.jpg "Home Page")
![Home Page](/assets/about.jpg "About Page")
![Home Page](/assets/contact.jpg "Contact Page")

Disclaimer:
This project, [create-react-auth-nav](https://www.npmjs.com/package/create-react-auth-nav), is provided as-is without any warranty of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. The use of [create-react-auth-nav](https://www.npmjs.com/package/create-react-auth-nav) is entirely at your own risk. The author(s) or contributors shall not be liable for any damages, including but not limited to direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your access to, use of, or reliance on this project. By using [create-react-auth-nav](https://www.npmjs.com/package/create-react-auth-nav), you agree to this disclaimer and acknowledge that the project is offered freely for use, modification, and distribution under its specified license, without any obligation for support, maintenance, or updates.





