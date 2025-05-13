### Interview Scheduler | React-Powered Booking Platform

A dynamic single-page application for streamlined interview coordination

Key Features:
- 🗓️ Interactive Calendar - Visual scheduling with drag-and-drop functionality
- 📅 Persistent Data - PostgreSQL backend maintains all bookings
- 🧪 Comprehensive Testing - 90%+ test coverage with Jest, Cypress & Storybook
- 🔄 Real-time Updates - Instant confirmation notifications

Tech Stack: `React.js` | `PostgreSQL` | `Jest` | `Cypress` | `Storybook`

## Final Product

Saving a new interview
![saveNewInterview](https://github.com/ChrisnNg/scheduler/blob/master/public/gifs/saveNewInterview.gif?raw=true)

Deleting a interview
![deleteInterview](https://github.com/ChrisnNg/scheduler/blob/master/public/gifs/deleteInterview.gif?raw=true)

Changing the day and then editing a existing interview
![changeDayandEdit](https://github.com/ChrisnNg/scheduler/blob/master/public/gifs/changeDayandEdit.gif?raw=true)

### Prerequisites

Follow the instructions and install the Scheduler API at [Scheduler API](https://github.com/lighthouse-labs/scheduler-api)

After that is complete, while within the API directory, run `npm start` to boot up the API server. Please note that both the API server and the Webpack server must be up and running for proper access to the scheduler.

### Installing

Begin by cloning the repository into your directory

```
git clone git@github.com:ChrisnNg/scheduler.git
```

Install dependencies with

```
`npm install`.
```

With both the prerequisite done and the installation completed, you are now ready to start the server!

## Starting the server

Open up two terminals so you can have both servers running concurrently.

#### Running Webpack Development Server

While at the root directory, run-

```sh
npm start
```

#### Running scheduler-api (from the prerequsites)

If you have not already done so; while within the root directory of the scheduler-api run-

```sh
npm start
```

With both servers on, you can now navigate to [Localhost](http://localhost:8000/) at port :8000 to see the scheduler!

### Running the tests

For developers who would like to expand upon the scheduler, we have created a set of tests so you can run your changes against it. Please read through the tests to understand what they test as you may have to update them if you change certain context the tests check for.

##### Running Jest Test Framework

```sh
npm test
```

##### Running Cypress Test Framework

```sh
npm run cypress
```

##### Running Storybook Visual Testbed

```sh
npm run storybook
```

## Deployment

To be written-

## Dependencies

- axios: 0.19.0
- classnames: 2.2.6
- normalize.css: 8.0.1
- react: 16.9.0
- react-dom: 16.9.0
- react-scripts: 3.0.0"

### devDependencies

- @babel/core: 7.4.3
- @storybook/addon-actions: 5.0.10
- @storybook/addon-backgrounds: 5.0.10
- @storybook/addon-links: 5.0.10
- @storybook/addons: 5.0.10
- @storybook/react: 5.0.10
- @testing-library/jest-dom: 4.0.0
- @testing-library/react: 8.0.7
- @testing-library/react-hooks: 2.0.1
- babel-loader: 8.0.5
- node-sass: 4.11.0
- prop-types: 15.7.2
- react-test-renderer: 16.10.1

## Authors

- **Chris Ng** - [ChrisnNg](https://github.com/ChrisnNg)

## Acknowledgments

- [Jensen](https://github.com/jensen) For his [Scheduler-Api](https://github.com/lighthouse-labs/scheduler-api) and [Scheduler](https://github.com/lighthouse-labs/scheduler) base.
- [Lighthouse Labs](https://www.lighthouselabs.ca/) for guiding and mentoring me through the process.
