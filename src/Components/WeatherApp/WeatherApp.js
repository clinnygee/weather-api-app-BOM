import React from 'react';
import Navigation from '../Navigation';
import WeatherPanel from '../WeatherPanel';
import HamburgerMenu from '../Navigation/HamburgerMenu'
import Map from '../Maps';
import Media from 'react-media';


class WeatherApp extends React.Component {


    constructor (){

        super();

        this.state = {
            countryCode: ',au',
            location: 'Morayfield,au',
            currentWeatherData: null,
            forecastWeatherData: null,
            displayNav: true,
            geolocation: null,
            apiKey: '2e8a17c6cc6b9d1b81c7ec3d9dc36412'
        }
    };

    componentWillMount = () => {
        // this.fetchDaysWeather(this.state.location).then(data => {
        //     this.setState({currentWeatherData: data});
        // })

        // this.fetchWeeksWeather(this.state.location).then(weeksData => {
        //     this.setState({forecastWeatherData: weeksData});
        // })
        const mobile = window.matchMedia('(max-width: 600px)');

        console.log(mobile.matches);
        if(mobile.matches){
            this.setState({displayNav: false});
        };

        navigator.geolocation.getCurrentPosition(this.geolocationSuccess, this.geolocationFailure);
    };

    geolocationSuccess = (pos) => {

        console.log(pos);

        const geolocation = pos.coords;

        console.log(geolocation.latitude.toFixed(0));

        this.setState({geolocation: {lat: geolocation.latitude.toFixed(5), lon: geolocation.longitude.toFixed(5)}}, () => {this.geolocationDataFetch()});

        

    };

    geolocationFailure = (err) => {
        console.log(err);
    };

    geolocationDataFetch = async () => {

        const lat = this.state.geolocation.lat;
        const lon= this.state.geolocation.lon;

        const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=9fe564bca63752159bb51775d9a2e5b0`;
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=9fe564bca63752159bb51775d9a2e5b0`;

        const currentResponse = await fetch(currentUrl);
        const forecastResponse = await fetch(forecastUrl);

        const daysWeather = await currentResponse.json();
        const weeksWeather = await forecastResponse.json();

        this.handleWeatherDataUpdate(daysWeather, weeksWeather);
    }

    fetchDaysWeather = async (location) => {

        const getUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=2e8a17c6cc6b9d1b81c7ec3d9dc36412`;

        // https://api.openweathermap.org/data/2.5/weather?q=$Morayfield,Au&APPID=2e8a17c6cc6b9d1b81c7ec3d9dc36412
        // https://api.openweathermap.org/data/2.5/weather?lat=-27&lon=153&APPID=2e8a17c6cc6b9d1b81c7ec3d9dc36412`

        const response = await fetch(getUrl);

        const daysWeather = await response.json();

        return daysWeather;
    };

    fetchWeeksWeather = async (location) => {
        const getUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=2e8a17c6cc6b9d1b81c7ec3d9dc36412`;

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

        
        this.setState({currentWeatherData: Object.assign({}, current), forecastWeatherData: Object.assign({}, weeks), displayNav: false});

        
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

    handleOutsideNavClick = () => {
        console.log('in handle OutsideNavClick')
        if(this.state.displayNav){
            this.setState({displayNav: false});
        }
    };

    render(){
        return (
            
            <div className='weatherapp-container'>
                {/* <Media query={"(max-width: 600px)"}> */}
                    <HamburgerMenu onHamburgerIconClick={this.handleHamburgerIconClick}/>
                {/* </Media> */}
                <Navigation onNavSearchClick={this.handleNavSearchClick} onDefaultCityClick={this.handleDefaultCityClick} displayNav={this.state.displayNav}/>
            
                <WeatherPanel 
                    currentWeatherData={this.state.currentWeatherData} 
                    forecastWeatherData={this.state.forecastWeatherData}
                    onOutsideNavClick={this.handleOutsideNavClick}
                    dimmed={this.state.displayNav}
                    />
                <div className='footer'>
                    <a href='https://github.com/clinnygee/weather-api-app-BOM'><p>https://github.com/clinnygee/weather-api-app-BOM</p></a>
                    
                </div>
            </div>
        )
    }
}

export default WeatherApp;