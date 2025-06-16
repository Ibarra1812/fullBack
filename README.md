# Notes backend

https://practice-test-zqwz.onrender.com

This repository contains the backend developed from part 3 onwards in the Full Stack course. The different stages of the application are saved in different branches.

The Notes backend implements a RESTful HTTP interface and handles the management of notes. It is developed using Node and Express. The purpose is to develop a backend that works with the [frontend](https://github.com/fullstack-hy2020/part2-notes-frontend/tree/part3-1) developed in part 2 of the course.

## Running the application on your own machine

You can easily try out the application on your own machine. The current version of the application is developed using Node version 22.3.0. For the best experience, it is recommended to use the same major version of Node, but the application will likely work with other Node versions as well.

Follow these steps to run the application:

1. Clone this repository to your own machine with the command `git clone https://github.com/fullstack-hy2020/part3-notes-backend.git`

2. Navigate to the cloned repository with the command `cd part3-notes-backend`

3. Switch to the desired branch with the command `git switch <branch-name>`

4. Install the node modules with the command `npm install`

5. If you are on branch part3-4 or later, you need to create a _.env_ file in the root of the project with the following content:

   ```
   MONGODB_URI=your_database_connection_string
   PORT=3001
   ```

   `MONGODB_URI` defines the database connection url and `PORT` defines the port on which the application will be started.

6. Start the application with the command `npm run dev`. By default, the application will start on port 3001, so it will be available at http://localhost:3001/.

## How to switch between branches?

The different stages of the application are saved in different branches. Switching branches changes the code in your working directory to match the state of the branch you switched to. This allows you to work on different versions of the application without affecting the codebase of other branches.

You can switch to the desired branch by running the command `git switch <branch-name>`, for example `git switch part3-2`. Note that new dependencies are added to the application as development progresses, so after switching branches, it is safest to run the command `npm install` to ensure that any missing node modules will be installed on your machine.

## # Notes backend

...existing code...

## Dependencies
## Dependencies

The main dependencies used in this project are:

- [express](https://www.npmjs.com/package/express): ^5.1.0  
  Minimal and flexible Node.js web application framework for building APIs.
- [cors](https://www.npmjs.com/package/cors): ^2.8.5  
  Middleware to enable Cross-Origin Resource Sharing (CORS) in Express apps.
- [morgan](https://www.npmjs.com/package/morgan): ^1.10.0  
  HTTP request logger middleware for Node.js.

For development:
- [nodemon](https://www.npmjs.com/package/nodemon): ^3.1.10  
  Utility that automatically restarts the Node.js application when file changes are detected.

You can see all dependencies in `package.json`.
The main dependencies used in this project are:

- [express](https://www.npmjs.com/package/express): ^5.1.0
- [cors](https://www.npmjs.com/package/cors): ^2.8.5
- [morgan](https://www.npmjs.com/package/morgan): ^1.10.0

For development:
- [nodemon](https://www.npmjs.com/package/nodemon): ^3.1.10

You can see all dependencies in `package.json`.

## Available Scripts

You can run the following commands in the project root:

- `npm install`  
  Installs all dependencies.

- `npm start`  
  Starts the application using Node.

- `npm run dev`  
  Starts the application in development mode using nodemon (auto-restarts on changes).

- `npm run build:ui`  
  Builds the frontend from `/home/alvaro/Documentos/part1` and copies the build to this backend's `dist` folder.

- `npm run deploy:full`  
  Builds the frontend, commits the changes, and pushes to the repository.

...existing code...