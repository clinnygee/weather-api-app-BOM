import React from 'react';

class NavDefaultSearchesCity extends React.Component {

    handleDefaultCityClick = () => {
        this.props.onDefaultCityClick(this.props.city);
    }

    render(){
        return (
            <div className='sidebar-nav-item-small'>
                <div className='nav-default-search-city' onClick={this.handleDefaultCityClick}>
                    <div><span className='default-city-name'>{this.props.city}</span><span className='default-city-arrow'>&#8827;</span></div>
                    

                    
                </div>

            </div>
        )
    }
}

export default NavDefaultSearchesCity;