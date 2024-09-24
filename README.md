# Full Stack Practice Project

This project is focused on enhancing my full-stack development skills using HTML, CSS, JavaScript, and Node.js. It serves as a deeper dive into the intricacies of building dynamic web applications, focusing on performance optimization, modern design patterns, and scalability.

## Table of Contents
- [About](#about)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Features](#features)
- [Performance Improvements](#performance-improvements)
- [Contributing](#contributing)
- [License](#license)

## About

This project is part of my ongoing efforts to enhance my full-stack development skills. While I already have a strong foundation in front-end and some back-end technologies, this project allows me to apply more advanced concepts such as efficient API handling, modular architecture, and responsive design.

## Technologies Used

- **Front-End:**
  - HTML5
  - CSS3 (Flexbox, Grid)
  - JavaScript (ES6+)
  - SCSS (for advanced styling)

- **Back-End:**
  - Node.js (v16+)
  - Express.js
  - MongoDB with Mongoose (ORM)

- **Development Tools:**
  - Git/GitHub for version control
  - Postman for API testing
  - Webpack for bundling and optimizing front-end assets
  - Visual Studio Code for code editing

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/BrotherKayman/Full-stack-practice.git
    cd full-stack-practice
    ```

2. Install all required dependencies:

    ```bash
    npm install
    ```

3. Set up your environment variables by creating a `.env` file in the root directory:

    ```bash
    MONGO_URI=<mongodb_connection_string>
    PORT=8080
    ```

4. Start the application:

    ```bash
    npm start
    ```

5. Access the app at `http://localhost:8080`.

## Usage

Once the server is running, navigate to `http://localhost:8080` to view the application. Use the following routes for API interaction:

### API Endpoints

- **GET** `/api/users` - Fetch all users.
- **POST** `/api/users` - Add a new user.
- **PUT** `/api/users/:id` - Update user information.
- **DELETE** `/api/users/:id` - Delete a user.

Test APIs using Postman or the in-app UI.

## Project Structure

```bash
├── public          # Static files (HTML, CSS, JS)
├── src
│   ├── controllers # Controllers for API logic
│   ├── models      # Mongoose models for MongoDB
│   ├── routes      # API routes
│   ├── services    # Business logic and helper services
│   └── app.js      # Main server file
├── tests           # Unit and integration tests
├── package.json    # Project dependencies
└── README.md       # This file
