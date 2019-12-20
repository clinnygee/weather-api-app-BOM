import React from 'react';
import NoWeatherData from './NoWeatherData';
import CurrentWeather from './CurrentWeather';
import ForecastWeather from '../WeatherForecast/ForecastWeather'
import Map from '../Maps/Map';
import './WeatherPanel.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTint} from '@fortawesome/free-solid-svg-icons'
import {faGithubSquare} from '@fortawesome/free-solid-svg-icons'


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
                    <Map />
                    <div className='github-container'>
                        <FontAwesomeIcon icon={faGithubSquare}/>
                    </div>
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