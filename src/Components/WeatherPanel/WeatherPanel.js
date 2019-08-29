import React from 'react';
import NoWeatherData from './NoWeatherData';
import CurrentWeather from './CurrentWeather';
import './WeatherPanel.css';


class WeatherPanel extends React.Component {



    render(){
        console.log(this.props);
        if(this.props.currentWeatherData){
            return(
                <main className='weatherpanel-container'>
                    <CurrentWeather WeatherData={this.props.currentWeatherData}/>
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