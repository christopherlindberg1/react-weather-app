# Weather App

## The app

Application that presents weather data from any place on earth. Users can provide cities by name or use their location to get current weather data.

## Technologies

The application is build with React. Bootstrap is used for styling, and other external JS-libraries are used for implementing certain functionalities, like fetching data from the [weather API](https://openweathermap.org/api).

## Get started

Follow the instructions below to get started and run the app on your local machine.

### Install Node.js

Node.js is needed for running the local server. If you don't have Node.js installed, go to [this website](https://nodejs.org/en/) and download it.

### Clone this github repo

Use the terminal (or command line if you're using Windows) to navigate to the directory where you want to store the project files.

```
cd path/to/project/folder
```

Clone this repo to download all project files.

```
git clone https://github.com/christopherlindberg1/react-weather-app.git
```

You should now have the entire project folder located in the current folder.

## Install React

Navigate to the *weather-app* folder. This is where the code lives.

```
cd react-weather-app/weather-app
```

Install React so that Node.js is able to run the React app. This may take a few minutes.

```
npm i react
```

### Start the server

Once you have downloaded all files you can start a local server and use the app. It may take a minute for the website to render the first time you start the server.

```
npm start
```

**Note. If you get a message saying *Something is already running on port 3000* when you run this command, press "y" to use another port.**

A tab with the website should open in your browser. If a tab isn't automatically opened, go to the URL localhost:3000 (or which ever port you are using) in your browser.

## Dependencies

This project uses a few external dependencies. These are all included in the *package.json* file that you downloaded when you cloned this repo. This means that you **do not** have to install them manually. Below are short descriptions of what the dependencies have been used for in this project.

### Axios

HTTP client used to make requests to the [weather API](https://openweathermap.org/api).

### Bootstrap

Used for styling.

## License

This project is licensed under the MIT License - see [LICENSE.md](https://github.com/christopherlindberg1/react-weather-app/blob/master/LICENSE) for details.