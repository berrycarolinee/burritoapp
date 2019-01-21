
## About
This React app uses Foursquare API data to load restaurants that serve burritos in Eugene, Oregon. You can also search restaurant by name. The venues are rendered using the Google Maps API.

## How to Load
Use the terminal to install and start the application.
1. npm install
2. npm start

## Offline Mode
Resources are cached using Create React App's service worker function. The application is available in production mode only. To run, follow the following steps in the terminal.

1. npm run build
2. serve -s build

This will run on localhost:5000

### Resources and Documentation:

* [Create-react-app Documentation](https://github.com/facebookincubator/create-react-app)

* [React API](https://facebook.github.io/react/docs/react-api.html)

* [Google Map React Component Tutorial](https://www.npmjs.com/package/google-maps-react)

* [FourSquare API Documentation](https://developer.foursquare.com/docs)
