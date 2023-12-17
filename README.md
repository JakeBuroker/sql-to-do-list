# To-Do List

## Description
This To-Do List application is a full-stack web application that allows users to efficiently manage their daily tasks. The frontend is built using HTML, CSS, JavaScript, and Bootstrap, providing a user-friendly interface for adding, deleting, and viewing tasks. The backend is powered by Node.js and Express, handling HTTP requests and interfacing with a PostgreSQL database. Axios is used for making HTTP requests from the frontend. The application provides audio feedback for interactions and has a persistent storage mechanism for tasks using SQL. The application is deployed on Heroku.

## Deployment
The application is deployed on Heroku and can be accessed at [Heroku App URL]. The deployment includes both the frontend and backend services, providing a fully functional web application experience.

## Installation for Local Development
To set up the To-Do List project for local development, follow these steps:

1. Clone the repository:
2. Navigate to the project directory:
3. Install dependencies:
4. Initialize the database using the `database.sql` script.
5. Start the application with Nodemon:
6. Access the app at `http://localhost:5001`

## Features
- Task management with add, view, complete, and delete functionalities.
- Responsive frontend design using Bootstrap.
- Backend built with Node.js and Express.
- PostgreSQL for data storage with `pg` library.
- Nodemon for efficient development.
- Audio feedback for adding and deleting tasks.
- Integration tests with Cypress.

## Backend API
The API supports the following operations:

- **GET `/todos`**: Fetches all tasks.
- **POST `/todos`**: Adds a new task.
- **PUT `/todos/:id`**: Updates task status.
- **DELETE `/todos/:id`**: Removes a task.

## Testing
- Run integration tests with Cypress:
- 'nmp test'


## Contributing
Contributions are welcome. Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Submit a Pull Request.

## License
Licensed under the ISC License.

## Contact
For queries or suggestions email JakeTBuroker@gmail.com

---