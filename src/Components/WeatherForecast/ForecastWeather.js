import React from 'react';
import ForecastWeatherCards from './ForecastWeatherCards';
import './ForecastWeather.css'

class ForecastWeather extends React.Component {

    getTonightsForecast = () => {

    }

    getTomorrowsForecast = () => {

    }

    render(){

        console.log(this.props.ForecastData);
        return (
            // this should be an entirely new component, which as props will recieve tonights low, and tomorrows high
            <div className='forecast-container'>
                <div className='forecast-container-first'>
                    <div className='tonight-tomorrow'>
                        <div className='tonight'>
                            <p className='degrees'>10 {'\u00b0'}</p>
                            <p className='alt-color'>Tonight</p>
                        </div>
                        <div className='tomorrow'>
                            <p className='degrees alt-color'>
                                8{'\u00b0'}
                            </p>
                            <p className='alt-color'>
                                Tomorrow
                            </p>
                        </div>
                    </div>
                    <div className= 'current-weather-extras'>
                        <div className='current-weather-extras-content'>
                            <p>8-- CALM 0 <span className='alt-color'>km/h</span></p>
                            <p>8-- 88% <span className='alt-color'>humidity </span></p>
                            <p>&#128167; 0.2mm <span className='alt-color'>since 9 am</span></p>
                        </div>
                    </div>
                </div>
                <div className='forecast-container-second'>
                    {/*
                         this will recieve an array of objects, each object will be a date, spanning up to five days in the future,
                        each day will have a day and night time temperature, and a probability of rain, likely, a completely made up one.
                    */}
                    <ForecastWeatherCards />
                </div>
            </div>
        )
    }
}

export default ForecastWeather;