import React from 'react';

class ForecastWeatherCard extends React.Component {


    render(){
        return (
            <div className='forecast-container-card'>
                <div className='forecast-container-card-date'>
                    <p>Tomorrow</p>
                </div>
                <div className='forecast-container-card-icon'>
                    <p>
                        &#9788; 
                    </p>
                    
                </div>
                <div className='forecast-container-card-temp'>
                    <span>
                        12
                    </span>
                    <span>
                        28
                    </span>
                </div>
                <div className='forecast-container-card-rain'>
                    <p>8 - No Rain</p>
                </div>


            </div>
        )
    }
}

export default ForecastWeatherCard;