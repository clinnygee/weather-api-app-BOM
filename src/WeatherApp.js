import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import WeatherPanel from './Components/WeatherPanel/WeatherPanel';
import HamburgerMenu from '../src/Components/Navigation/HamburgerMenu'
import Media from 'react-media';


class WeatherApp extends React.Component {


    constructor (){

        super();

        this.state = {
            countryCode: ',au',
            location: 'Morayfield,au',
            currentWeatherData: null,
            forecastWeatherData: null,
            displayNav: false,
        }
    };

    componentWillMount = () => {
        // this.fetchDaysWeather(this.state.location).then(data => {
        //     this.setState({currentWeatherData: data});
        // })

        // this.fetchWeeksWeather(this.state.location).then(weeksData => {
        //     this.setState({forecastWeatherData: weeksData});
        // })

        console.log(this.state.currentWeatherData);

        console.log(this.state.forecastWeatherData);
    };

    fetchDaysWeather = async (location) => {

        const getUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=2e8a17c6cc6b9d1b81c7ec3d9dc36412`;

        const response = await fetch(getUrl);

        const daysWeather = await response.json();

        return daysWeather;
    };

    fetchWeeksWeather = async (location) => {
        const getUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=2e8a17c6cc6b9d1b81c7ec3d9dc36412`;

        const response = await fetch(getUrl);

        const weeksWeather = await response.json();

        return weeksWeather;
    };

    handleNavSearchClick = (searchTerm) => {

        const newLocation = `${searchTerm}${this.state.countryCode}`;
        this.setState({location: newLocation});
        
        this.handleSearch(newLocation);
    };

    handleSearch = async (location) => {
        
        

        const currentData = await this.fetchDaysWeather(location);

        const weeksData = await this.fetchWeeksWeather(location);

        await this.handleWeatherDataUpdate(currentData, weeksData);
    };

    handleWeatherDataUpdate = (current, weeks) => {
        this.setState({currentWeatherData: Object.assign({}, current), forecastWeatherData: Object.assign({}, weeks)});

        
    }

    handleDefaultCityClick = (location) => {

        const searchLocation = `${location}${this.state.countryCode}`;

        this.setState({location: location});

        this.handleSearch(searchLocation);
    }

    handleHamburgerIconClick = () => {

        const nextDisplay = !this.state.displayNav;
        console.log(nextDisplay);
        this.setState({displayNav: nextDisplay});
    }

    render(){
        return (
            
            <div className='weatherapp-container'>
                <Media query={"(max-width: 600px)"}>
                    <HamburgerMenu onHamburgerIconClick={this.handleHamburgerIconClick}/>
                </Media>
                <Navigation onNavSearchClick={this.handleNavSearchClick} onDefaultCityClick={this.handleDefaultCityClick} displayNav={this.state.displayNav}/>
            
                <WeatherPanel currentWeatherData={this.state.currentWeatherData} forecastWeatherData={this.state.forecastWeatherData}/>
            </div>
        )
    }
}

export default WeatherApp;