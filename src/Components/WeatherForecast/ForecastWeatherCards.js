import React from 'react'
import ForecastWeatherCard from './ForecastWeatherCard'

class ForecastWeatherCards extends React.Component {

    render(){
        return (
            <div className='forecast-container-cards'>
                <ForecastWeatherCard />
                <ForecastWeatherCard />
                <ForecastWeatherCard />
                <ForecastWeatherCard />
                <ForecastWeatherCard />
            </div>
        )
    }
}

export default ForecastWeatherCards;