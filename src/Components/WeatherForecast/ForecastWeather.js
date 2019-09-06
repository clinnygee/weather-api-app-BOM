import React from 'react';
import ForecastWeatherCards from './ForecastWeatherCards';
import './ForecastWeather.css'

class ForecastWeather extends React.Component {

    getTonightsForecast = () => {

    };

    getTomorrowsForecast = () => {

    };

    convertToCelcius = (temp) => {
        return (temp - 273.15).toFixed(1);
    }

    createForecastObjects = (allForecasts) => {

        const today = new Date();

        console.log(today);

        console.log(allForecasts);

        const todaysDate = today.getDate();

        const forecastObjects = this.initializeDatesForForecast(today);

        allForecasts.list.forEach((forecast) => {
            let currentForecastsDate = new Date(forecast.dt * 1000);
            console.log(currentForecastsDate.getDate() - todaysDate);
            let index = currentForecastsDate.getDate() - todaysDate;

            forecastObjects[index].addTemperature(forecast.main.temp);

            if(forecast.rain){
                console.log(forecast.rain["3h"]);
                forecastObjects[index].addRain(forecast.rain["3h"]);
            }

        })

        return forecastObjects;


    }

    initializeDatesForForecast = (today) => {

        const forecastObjects = []
        for(let i = 0; i < 6; i++){
            forecastObjects.push(new daysWeatherForecasts(new Date (new Date().setDate(today.getDate() + i))));
        }

        return forecastObjects;
    }

    render(){
        
        const dailyForecasts=this.createForecastObjects(this.props.ForecastData);


        return (
            // this should be an entirely new component, which as props will recieve tonights low, and tomorrows high
            <div className='forecast-container'>
                <div className='forecast-container-first'>
                    <div className='tonight-tomorrow'>
                        <div className='tonight'>
                            <p className='degrees'>{this.convertToCelcius(dailyForecasts[0].getLow())} {'\u00b0'}</p>
                            <p className='alt-color'>Tonight</p>
                        </div>
                        <div className='tomorrow'>
                            <p className='degrees alt-color'>
                                {this.convertToCelcius(dailyForecasts[1].getHigh())}{'\u00b0'}
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
                    <ForecastWeatherCards dailyForecasts={dailyForecasts}/>
                </div>
            </div>
        )
    }
}

class daysWeatherForecasts {

    constructor(day){
        
        this.day = day;
        this.temperatures = [];
        this.rain = [];
    }

    addTemperature = (temp) => {
        this.temperatures.push(temp);
    }

    addRain = (rain) => {
        this.rain.push(rain);
    }

    getHigh = () => {
        console.log(Math.max(...this.temperatures))
        return Math.max(...this.temperatures);
    };

    getLow = () => {
        console.log(Math.min(...this.temperatures))
        return Math.min(...this.temperatures);
    }

    getRainProb = () => {
        if(this.rain.length === 0){
            return 0;
        } else {
            let sum = 0;
            this.rain.forEach(value => sum += value)

            return (sum / this.rain.length) * 100;
        }
    }

}

export default ForecastWeather;