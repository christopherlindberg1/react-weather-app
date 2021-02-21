import React from 'react';

export default class Form extends React.Component {
    render() {
        return (
            <div id="weather-output" className="white-area p-4 rounded">

                {this.props.city && <h2 className="display-5">Current weather in {this.props.city}, {this.props.country}</h2>}

                <div id="output-box" className="d-flex flex-column">
                    {this.props.temp != 0 && this.props.temp && <span className="lead">Temperature: {this.props.temp} °C</span>}

                    {this.props.tempMin != 0 && this.props.tempMin && <span className="lead">Lowest temperature today: {this.props.tempMin} °C</span>}

                    {this.props.tempMax != 0 && this.props.tempMax && <span className="lead">Highest temperature today: {this.props.tempMax} °C</span>}

                    {this.props.windSpeed != 0 && this.props.windSpeed && <span className="lead">Wind speed: {this.props.windSpeed} m/s</span>}

                    {this.props.windDirection != 0 && this.props.windDirection && <span className="lead">Wind direction: {this.props.windDirection}°</span>}

                    {this.props.humidity != 0 && this.props.humidity && <span className="lead">Humidity: {this.props.humidity} °C</span>}

                    {this.props.description != 0 && this.props.description && <span className="lead">Description: {this.props.description}</span>}
                </div>
            </div>
        )
    }
}
