import React from 'react';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';
// import Jumbotron from './components/layout/Jumbotron';
import Info from './components/layout/Info';
import WeatherTitle from './components/layout/WeatherTitle';
import EmptyVerticalSpace from './components/layout/EmptyVerticalSpace';
import Footer from './components/layout/Footer';
import LoadingIndicator from './components/layout/LoadingIndicator';
import LocationError from './components/layout/LocationError';

const Axios = require('axios');


class App extends React.Component {

    state = {
        isWaitingForData: false,
        city: undefined,
        country: undefined,
        temp: undefined,
        tempMin: undefined,
        tempMax: undefined,
        windSpeed: undefined,
        windDirection: undefined,
        humidity: undefined,
        description: undefined,
        apiError: undefined,
        geoError: undefined,
        searchTermCity: undefined,
        searchTermCountry: undefined,
    }


    getSearchTermCity = (e) => {
        this.setState({ searchTermCity: e.target.value });
    }


    getSearchTermCountry = (e) => {
        this.setState({ searchTermCountry: e.target.value });
    }


    getWeatherByInput = (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const countryCode = e.target.elements.countryCode.value;

        // If both city and country code is provided
        if (city && countryCode) {
            this.setState({ isWaitingForData: true });
            Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
                .then(res => {
                    this.setState({
                        isWaitingForData: false,
                        city: res.data.name,
                        country: res.data.sys.country,
                        temp: res.data.main.temp,
                        tempMin: res.data.main.temp_min,
                        tempMax: res.data.main.temp_max,
                        windSpeed: res.data.wind.speed,
                        windDirection: res.data.wind.deg,
                        humidity: res.data.main.humidity,
                        description: res.data.weather[0].description,
                        apiError: "",
                        geoError: "",
                    })
                })
                .catch(this.handleAPIErrors)

            // If only a city is provided
        } else if (city && countryCode === "") {
            this.setState({ isWaitingForData: true });
            Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
                .then(res => {
                    this.setState({
                        isWaitingForData: false,
                        city: res.data.name,
                        country: res.data.sys.country,
                        temp: res.data.main.temp,
                        tempMin: res.data.main.temp_min,
                        tempMax: res.data.main.temp_max,
                        windSpeed: res.data.wind.speed,
                        windDirection: res.data.wind.deg,
                        humidity: res.data.main.humidity,
                        description: res.data.weather[0].description,
                        apiError: "",
                        geoError: "",
                    })
                })
                .catch(this.handleAPIErrors)

            // If no data i provided
        } else {
            this.setState({
                apiError: "Please provide a city if you use country codes",
                geoError: undefined,
            })
        }

        // if (!this.state.apiError && !this.state.geoError) {
        e.target.elements.city.value = "";
        e.target.elements.countryCode.value = "";
        // }
    }


    handleAPIErrors = (err) => {
        if (err.response) {
            // console.log("Problem with response ", err.response.status);
            this.setState({
                apiError: "The city does not exist",
                geoError: "",
            });
        } else if (err.request) {
            // console.log("Problem with request");
            this.setState({
                apiError: "Oops. Something went wrong!",
                geoError: "",
            })
        } else {
            console.log("Error ", err.message);
        }

        this.setState({ isWaitingForData: false });
    }


    getWeatherByLocation = (e) => {
        e.preventDefault();
        this.setState({ isWaitingForData: true });
        navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoFail, { timeout: 5000 });
    }


    geoSuccess = position => {
        const { latitude, longitude } = position.coords;

        this.setState({ isWaitingForData: true });
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            .then(res => {
                this.setState({
                    isWaitingForData: false,
                    city: res.data.name,
                    country: res.data.sys.country,
                    temp: res.data.main.temp,
                    tempMin: res.data.main.temp_min,
                    tempMax: res.data.main.temp_max,
                    windSpeed: res.data.wind.speed,
                    windDirection: res.data.wind.deg,
                    humidity: res.data.main.humidity,
                    description: res.data.weather[0].description,
                    apiError: "",
                    geoError: "",
                })
            })
        // .catch(this.handleGeolocationError);
    }


    geoFail = (err) => {
        // console.log(err);
        // console.log(err.code === 1);
        // User denies access to position
        if (err.code === 1) {
            this.setState({
                apiError: "",
                geoError: "You must give permission to your geolocation to use this feature",
            });
            // Geolocation API can not find location
        } else if (err.code === 2) {
            this.setState({
                apiError: "",
                geoError: "We could not access your position",
            });
            // Timeout (takes to long for geo-api to return coords)
        } else if (err.code === 3) {
            this.setState({
                apiError: "",
                geoError: "It took too long to find your position",
            });
        }
    }


    render() {
        return (
            <div id="wrapper">
                {/* <section id="jumbotron">
          <Jumbotron />
        </section> */}

                <main>
                    <section id="main-section">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <WeatherTitle />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-md-4">
                                    <Form
                                        getSearchTermCity={this.getSearchTermCity}
                                        getSearchTermCountry={this.getSearchTermCountry}
                                        getWeatherByInput={this.getWeatherByInput}
                                        getWeatherByLocation={this.getWeatherByLocation}
                                        apiError={this.state.apiError}
                                        geoError={this.state.geoError}
                                    />
                                </div>

                                <div className="col-sm-6 col-md-8">
                                    {!this.state.city && this.state.isWaitingForData == false &&
                                     !this.state.apiError && !this.state.geoError &&
                                        <Info />
                                    }
                                    
                                    {this.state.isWaitingForData &&
                                    !this.state.apiError && !this.state.geoError &&
                                        <LoadingIndicator />
                                    }

                                    {this.state.city && this.state.isWaitingForData == false &&
                                    !this.state.apiError && !this.state.geoError &&
                                        <Weather
                                            city={this.state.city}
                                            country={this.state.country}
                                            temp={this.state.temp}
                                            tempMin={this.state.tempMin}
                                            tempMax={this.state.tempMax}
                                            windSpeed={this.state.windSpeed}
                                            windDirection={this.state.windDirection}
                                            humidity={this.state.humidity}
                                            description={this.state.description}
                                        />
                                    }
                                    
                                    {(this.state.apiError || this.state.geoError) &&
                                        <LocationError
                                            apiError={this.state.apiError}
                                            geoError={this.state.geoError}
                                            searchTermCity={this.state.searchTermCity}
                                            searchTermCountry={this.state.searchTermCountry}
                                        />
                                    }

                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <EmptyVerticalSpace height="52px" />

                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}


export default App;
