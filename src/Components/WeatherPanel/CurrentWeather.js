import React from 'react';
import WeatherIcon from './WeatherIcon';

class CurrentWeather extends React.Component {

    convertToCelcius = (temp) => {
        return (temp - 273.15).toFixed(1);
    }

    convertToHumanReadableDateTime = (dateTime) => {
        const date = dateTime.getDate();

        const month = this.humanReadableMonth(dateTime);

        const time = this.humanReadableTime(dateTime);

        return `${time}, ${date} ${month}`;
    }

    humanReadableMonth = (dateTime) => {

        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const month = dateTime.getMonth();

        return months[month];
    }
    // if .getMinutes() is < 10, it returns say 8 instead of 08
    humanReadableTime = (dateTime) => {
        
        return `${dateTime.getHours()}:${this.humanReadableMinutes(dateTime)}`;
    }

    humanReadableMinutes = (dateTime) => {
        
        return dateTime.getMinutes().toString().length > 1 ? dateTime.getMinutes() : '0'+dateTime.getMinutes();
    }

    render(){

        const currentDateTime = new Date(this.props.WeatherData.dt * 1000);

        const sunrise = new Date(this.props.WeatherData.sys.sunrise * 1000);

        const sunset = new Date(this.props.WeatherData.sys.sunset * 1000);

        console.log(currentDateTime);
        return(
            
            <div className='weatherpanel-current-container'>
                <div className='weatherpanel-current-location'>
                    <div className='weatherpanel-current-location-name'>
                        <div>
                            <p>
                            {this.props.WeatherData.name}
                            </p>
                        </div>
                    </div>
                    {/* <div className='weatherpanel-current-location-icon'>
                        
                    </div> */}
                    <WeatherIcon icon={this.props.WeatherData.weather[0].icon} />
                </div>
                <div className='weatherpanel-current-temp'>
                    <div>
                        
                    </div>
                    <div className='weatherpanel-current-temp-reading'>
                        <div>
                            <p className='weatherpanel-current-temp-reading-degrees'>
                            {this.convertToCelcius(this.props.WeatherData.main.temp) + '\u00b0'} 
                            </p>
                            <p className='weatherpanel-current-temp-reading-feels'>
                                this will house feels like
                            </p>
                            <p className='weatherpanel-current-temp-reading-feels'>
                                {this.convertToHumanReadableDateTime(currentDateTime)}
                            </p>
                            
                        </div>
                    </div>
                    <div className='weatherpanel-current-temp-time'>
                        
                        <p>{this.humanReadableTime(sunrise)}<span role="img" className='weatherpanel-current-temp-time-icon'>&#127749;</span></p>
                        <p>{this.humanReadableTime(sunset)} <span role="img" className='weatherpanel-current-temp-time-icon'>&#127750;</span></p>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default CurrentWeather;