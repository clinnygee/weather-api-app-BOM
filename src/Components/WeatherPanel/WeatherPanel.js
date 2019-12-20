import React from 'react';
import NoWeatherData from './NoWeatherData';
import CurrentWeather from './CurrentWeather';
import ForecastWeather from '../WeatherForecast/ForecastWeather'
import Map from '../Maps/Map';
import './WeatherPanel.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';



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
                    <Map lat={this.props.currentWeatherData.coord.lat} lng={this.props.currentWeatherData.coord.lon}/>
                    <GitHub />
                </main>
            )
        } else {
            return (
                <NoWeatherData />
            )
        }
        
    }
};

const GitHub = () => {

    return (
        <div className='github-container'>
            <div className='github-container-content'>
                <a href='https://github.com/clinnygee/weather-api-app-BOM'><p><FontAwesomeIcon icon={['fab', 'github']}/></p></a>                
                <p>Check out the source on GitHub!</p>
            </div>            
        </div>
    )
}

export default WeatherPanel;