import React from 'react';
import WeatherIcon from '../WeatherPanel/WeatherIcon';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTintSlash} from '@fortawesome/free-solid-svg-icons';
import {faTint} from '@fortawesome/free-solid-svg-icons';

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
                        {this.convertToCelcius(this.props.low) + '\u00b0'}
                    </span>
                    <span>
                        {this.convertToCelcius(this.props.high) + '\u00b0'}
                    </span>
                </div>
                <div className='forecast-container-card-rain'>
                    <p>
                        <span className='rain-icon'> {this.props.rain === 0 ? <FontAwesomeIcon icon={faTintSlash} /> : <FontAwesomeIcon icon={faTint}/>} </span>
                        {this.props.rain} % 
                     </p>
                </div>


            </div>
        )
    }
}

export default ForecastWeatherCard;