import React from 'react';
import NavSearch from './NavSearch';
import NavDefaultSearches from './NavDefaultSearches';


class Navigation extends React.Component {
    render(){
        return (
            <nav className='sidebar-nav'>
                <div className='sidebar-nav-item-large'>
                    <div className='sidebar-nav-header'>
                        <p>BOM Weather</p>
                        <p className='bold'>Bureau of Meteorology</p>
                    </div>
                </div>
                <NavSearch onNavSearchClick={this.props.onNavSearchClick}/>
                <NavDefaultSearches onDefaultCityClick={this.props.onDefaultCityClick}/>
            </nav>
        )
    }
}

export default Navigation;