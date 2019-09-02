import React from 'react';
import NoWeatherData from './NoWeatherData';
import CurrentWeather from './CurrentWeather';
import ForecastWeather from '../WeatherForecast/ForecastWeather'
import './WeatherPanel.css';


class WeatherPanel extends React.Component {



    render(){
        console.log(this.props);
        if(this.props.currentWeatherData){
            return(
                <main className='weatherpanel-container'>
                    <CurrentWeather WeatherData={this.props.currentWeatherData}/>
                    <ForecastWeather ForecastData={this.props.forecastWeatherData}/>
                </main>
            )
        } else {
            return (
                <NoWeatherData />
            )
        }
        
    }
}

export default WeatherPanel;