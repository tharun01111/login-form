# React Login Form

## Overview

This project implements a simple and clean **Login Form using React.js**.
It demonstrates how to manage form data using React state and handle form submission with validation.

The login form allows users to enter an **email and password**, validates that both fields are filled, and resets the form after submission.

## Features

* Built with **React Functional Components**
* Uses **React Hooks (`useState`)**
* Simple **form validation**
* Responsive and modern **CSS styling**
* Clean and minimal UI design

## Technologies Used

* React.js
* JavaScript (ES6)
* HTML5
* CSS3

## Project Structure

```
project-folder
│
├── src
│   ├── components
│   │   └── Login.jsx
│   │
│   ├── styles
│   │   └── Login.css
│   │
│   └── App.js
│
└── README.md
```

## Installation

1. Clone the repository

```
git clone https://github.com/your-username/react-login-form.git
```

2. Navigate to the project directory

```
cd react-login-form
```

3. Install dependencies

```
npm install
```

4. Run the project

```
npm start
```

The application will run at:

```
http://localhost:3000
```

## How It Works

1. The user enters an **email and password**.
2. The form submission is handled using the `submitForm` function.
3. If either field is empty, an alert message appears.
4. If both fields are filled, the form is cleared.

## Future Improvements

* Add backend authentication (Node.js / Express)
* Implement JWT based login
* Add password visibility toggle
* Improve UI using TailwindCSS or Material UI

## Author

Tharun Adhithya
