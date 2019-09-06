import React from 'react';
import WeatherIcon from '../WeatherPanel/WeatherIcon'

class ForecastWeatherCard extends React.Component {

    convertToCelcius = (temp) => {
        return (temp - 273.15).toFixed(1);
    }

    render(){
        return (
            <div className='forecast-container-card'>
                <div className='forecast-container-card-date'>
                    <p>{this.props.day}</p>
                </div>
                <div className='forecast-container-card-icon'>
                    <p>
                        <WeatherIcon icon={this.props.icon} parent={'Card'}/>
                        {/* &#9788;  */}
                    </p>
                    
                </div>
                <div className='forecast-container-card-temp'>
                    <span>
                        {this.convertToCelcius(this.props.low)}
                    </span>
                    <span>
                        {this.convertToCelcius(this.props.high)}
                    </span>
                </div>
                <div className='forecast-container-card-rain'>
                    <p>8 - {this.props.rain} % </p>
                </div>


            </div>
        )
    }
}

export default ForecastWeatherCard;