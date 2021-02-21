import React from 'react';

export default class Form extends React.Component {

    render() {
        return (
            <div id="forms">
                <div className="form mb-4 p-4 white-area shadow-sm rounded" id="location-form">
                    <h3 className="display-5">Location</h3>
                    <form
                        onSubmit={this.props.getWeatherByInput}
                    >
                        <div className="form-group">
                            <label htmlFor="input-city">City: </label><br />
                            <input
                                onChange={this.props.getCitySearchTerm}
                                type="text"
                                name="city"
                                id="input-city"
                                placeholder="City..."
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="country-code">Country Code (Optional): </label><br />
                            <input
                                onChange={this.props.getCountrySearchTerm}
                                type="text"
                                name="countryCode"
                                id="country-code"
                                placeholder="Country Code..."
                            />
                        </div>

                        {/* {this.props.apiError && <p class="text-danger">{this.props.apiError}</p>} */}

                        <button className="btn btn-primary">Get Weather</button>
                    </form>
                </div>

                <div className="form p-4 white-area shadow-sm rounded" id="geo-form">
                    <h3 className="display-5 mb-3">Your position</h3>
                    <p>Get weather data for your current location</p>
                    <form
                        onSubmit={this.props.getWeatherByLocation}
                    >
                        {/* {this.props.geoError && <p>{this.props.geoError}</p>} */}

                        <button className="btn btn-primary">Get Weather</button>
                    </form>
                </div>
            </div>
        )
    }
}

