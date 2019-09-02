import React from 'react';
import NoWeatherData from './NoWeatherData';
import CurrentWeather from './CurrentWeather';
import ForecastWeather from '../WeatherForecast/ForecastWeather'
import './WeatherPanel.css';


class WeatherPanel extends React.Component {

    handleOutsideNavClick = (e) => {
        this.props.onOutsideNavClick();
    }

    getDisplayClass = (navOut) => {
        if(navOut){
            return 'dimmed';
        } else {
            return "";
        }
    }

    render(){
        console.log(this.props);
        if(this.props.currentWeatherData){
            return(
                <main className={`weatherpanel-container ${this.getDisplayClass(this.props.dimmed)}`} onClick={this.handleOutsideNavClick}>
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