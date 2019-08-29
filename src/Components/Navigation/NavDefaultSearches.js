import React from 'react';
import NavDefaultSearchesCity from './NavDefaultSearchesCity';

class NavDefaultSearches extends React.Component {

    constructor (props){
        super(props);

        this.state = {
            cities: ['Brisbane', 'Melbourne', 'Sydney', 'Adelaide', 'Hobart', 'Darwin', 'Perth']
        }
    }

    render(){

        const defaultSearches = this.state.cities.map((city) => (
            <NavDefaultSearchesCity city={city} onDefaultCityClick={this.props.onDefaultCityClick}/>
        ));

        return (
            defaultSearches
        )
    }
}

export default NavDefaultSearches;