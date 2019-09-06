import React from 'react'
import ForecastWeatherCard from './ForecastWeatherCard'

class ForecastWeatherCards extends React.Component {

    state = {
        today: new Date().getDay(),
    }

    getDayTitle = (day) => {
        if(day.getDay() === this.state.today){
            return 'Today';
        } else if (this.state.today - day.getDay() === -1){
            return 'Tomorrow';
        } else {
            return this.getDayName(day);
        }
    }

    getDayName = (day) => {
        const days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        return days[day.getDay()];
    }

    render(){

        const forecastWeatherCards = this.props.dailyForecasts.map((forecast) => (
            <ForecastWeatherCard 
                day={this.getDayTitle(forecast.day)}
                high={forecast.getHigh()}
                low={forecast.getLow()}
                rain={forecast.getRainProb().toFixed(1)}
                icon={forecast.getWeatherIcon()}
            />
        ))

        return (
            <div className='forecast-container-cards'>
                {forecastWeatherCards}
            </div>
        )
    }
}

export default ForecastWeatherCards;