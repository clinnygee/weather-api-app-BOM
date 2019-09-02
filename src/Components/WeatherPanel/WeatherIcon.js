import React from 'react';

import '../../WeatherIcons/weather-icons.css';

class WeatherIcon extends React.Component {

    getIconClassName = (iconCode) => {

        const iconCodeCopy = [...iconCode];

        return this.getTimeOfDayClass(iconCodeCopy);

    };

    getTimeOfDayClass = (iconCode) => {

        console.log(iconCode)
        
        const timeOfDayCode = iconCode.pop();

        const weatherCodeString = iconCode.join("");

        if(timeOfDayCode[0] === 'd') {
            return this.getDayWeatherClass(weatherCodeString);
        } else {
            return this.getNightWeatherClass(weatherCodeString);
        }
    }   

    getDayWeatherClass = (weatherCode) => {

        const timeOfDayClass = 'day';

        let weatherClass = '';

        if (weatherCode === '01'){
            weatherClass = 'sunny';
        } else if(weatherCode === '02' || weatherCode === '03' || weatherCode === '04'){
            weatherClass = 'cloudy';
        } else if (weatherCode === '09'){
            weatherClass = 'rain-mix'
        } else if (weatherCode === '10'){
            weatherClass = 'rain'
        } else if (weatherCode === '11'){
            weatherClass = 'thunderstorm'
        } else if (weatherCode === '13'){
            weatherClass = 'snow-wind'
        } else {
            weatherClass = 'fog';
        }

        return `wi-${timeOfDayClass}-${weatherClass}`;
    }

    getNightWeatherClass = (weatherCode) => {
        const timeOfDayClass = 'night';

        let weatherClass = '';

        if (weatherCode === '01'){
            weatherClass = 'clear';
        } else if(weatherCode === '02' || weatherCode === '03' || weatherCode === '04'){
            weatherClass = 'alt-cloudy';
        } else if (weatherCode === '09'){
            weatherClass = 'alt-showers'
        } else if (weatherCode === '10'){
            weatherClass = 'rain'
        } else if (weatherCode === '11'){
            weatherClass = 'alt-thunderstorm'
        } else if (weatherCode === '13'){
            weatherClass = 'alt-snow'
        } else {
            weatherClass = 'fog';
        }

        return `wi-${timeOfDayClass}-${weatherClass}`;
    }
    

    render(){

        
        return (
            <div className='weatherpanel-current-location-icon' 
            // style={{backgroundImage: this.createImageUrl()}}
            >
                <i className={`wi ${this.getIconClassName(this.props.icon)}`}></i>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default WeatherIcon;