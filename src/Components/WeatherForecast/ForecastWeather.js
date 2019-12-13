import React from 'react';
import ForecastWeatherCards from './ForecastWeatherCards';
import './ForecastWeather.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons';
import {faTint} from '@fortawesome/free-solid-svg-icons';

// this is on the git branch, geolocation

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

        // console.log(today);

        // console.log(allForecasts);

        const todaysDate = today.getDate();

        const forecastObjects = this.initializeDatesForForecast(today);

        allForecasts.list.forEach((forecast) => {
            let currentForecastsDate = new Date(forecast.dt * 1000);
            // console.log(currentForecastsDate.getDate() - todaysDate);
            let index = currentForecastsDate.getDate() - todaysDate;

            // f
            forecastObjects[index].addTemperature(forecast.main.temp);

            forecastObjects[index].addIcon(forecast.weather[0].icon);
            

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

        // console.log(this.props.ForecastData)
        
        const dailyForecasts=this.createForecastObjects(this.props.ForecastData);

        const currentWeather = this.props.ForecastData.list[0];

        // console.log(currentWeather);


        return (
            // this should be an entirely new component, which as props will recieve tonights low, and tomorrows high
            <React.Fragment>

            
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
                            <WindSpeed wind={currentWeather.wind}/>
                            {/* <p>8-- CALM 0 <span className='alt-color'>km/h</span></p> */}
                            <Humidity humidity={currentWeather.main.humidity}/>
                            {/* <p>8-- 88% <span className='alt-color'>humidity </span></p> */}
                            <RainHistory rain={currentWeather.rain ? currentWeather.rain["3h"] : 0} dateTime={currentWeather.dt} />
                            {/* // <p>&#128167; 0.2mm <span className='alt-color'>since 9 am</span></p> */}
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
            
            </React.Fragment>
        )
    }
};

const RainHistory = (props) => {

    const getForecastTime = (datetime) => {

    }

    return (
        // This needs to return the amount of rain over the last 3 hours. Need to recieve the DT of the forecast to
        // be able to display X amount of mms since X time
        <p>&#128167; {props.rain.toFixed(1)}mm <span className='alt-color'>since 9 am</span></p>
    )
}

const Humidity = (props) => {

    return (
    <p><FontAwesomeIcon icon={faTint}/> {props.humidity}% <span className='alt-color'>humidity </span></p>
    )
}

const WindSpeed = (props) => {

    const direction = (angle) => {

        const degrees = parseFloat(angle);
        let direction = '';
        if(degrees >= 0 && degrees < 30){
            direction = 'N';
        } else if (degrees >= 30 && degrees < 60){
            direction = 'NE';
        } else if (degrees >= 60 && degrees < 120){
            direction ='E';
        } else if (degrees >= 120 && degrees < 150){
            direction = 'SE';
        } else if (degrees >= 150 && degrees < 210){
            direction ='S'
        } else if (degrees >= 210 && degrees < 240){
            direction = 'SW'
        } else if (degrees >= 240 && degrees < 300){
            direction ='W';
        } else if (degrees >= 300 && degrees < 330){
            direction = 'NW';
        } else {
            direction = 'N';
        };
        // console.log(degrees)
        // console.log(direction)
        return direction;
    }

    return (
        // for the directed arrow, a FontAwesomeIcon will be used, it will be within a span that will have one of 8 classes on it for the 8 rotates.
        // props.wind.speed * 3.6, we want km/h, default measurement is metres/second 60*60/1000 is 3.6
        <p><span className={direction(props.wind.deg)}><FontAwesomeIcon icon={faArrowAltCircleUp}/></span> 
            <span className='alt-color'> {direction(props.wind.deg)} {(props.wind.speed * 3.6).toFixed(1)} KM/H</span></p>
    )
};

// when this class is created, if it is late in the day. this.temperatures becomes an empty array. wtf? this leads to an infinity bug

class daysWeatherForecasts {

    constructor(day){
        
        this.day = day;
        this.temperatures = [];
        this.rain = [];
        this.icons = [];
    }

    addTemperature = (temp) => {
        this.temperatures.push(temp);
    }

    addRain = (rain) => {
        this.rain.push(rain);
    }

    addIcon = (icon) => {
        this.icons.push(icon);
        // console.log(`adding icon ${icon}`)
    }

    getWeatherIcon = () => {
        // stores the amount of times, the most commonly occuring item occurs,
        let mf = 1;
        // keeps count of the occurances of the item at index i.
        let m = 0;
        // when m > mf, this value will store the icon code;
        let item;

        for(let i = 0; i < this.icons.length; i++){

            for(let j = i; j < this.icons.length; j++){
                if(this.icons[i] === this.icons[j]){
                    m++
                }
                if (m > mf){
                    mf = m;
                    item = this.icons[i];
                }
            }
            m = 0;
        }

        return item ? item : '01d';

        

        
    }

    getHigh = () => {
        // console.log(this.temperatures)
        // console.log(Math.max(...this.temperatures))
        return Math.max(...this.temperatures);
    };

    getLow = () => {
        // console.log(this.temperatures.length)
        // console.log(...this.temperatures)
        // console.log(Math.min(...this.temperatures))
        return Math.min(...this.temperatures);
    }

    getRainProb = () => {
        if(this.rain.length === 0){
            return 0;
        } else {
            let max = 0;
            this.rain.forEach(value => {if(value > max){max = value}});

            console.log('total prob of rain: ' + max);
            console.log('rain entries: ' + this.rain.length);

            return max * 100;
        }
    }

}

export default ForecastWeather;