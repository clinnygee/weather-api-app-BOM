import React from 'react';
import './navigation.css';

class HamburgerMenu extends React.Component {

    handleHamburgerIconClick = (e) => {

        this.props.onHamburgerIconClick();
    }
    render(){
        return (
            <div className='hamburger-menu'>
                <div className='hamburger-menu-icon'>
                    <img src='./hamburger-menu.png' className='hamburger-menu-icon-image' alt='menu icon' onClick={this.handleHamburgerIconClick}/>
                </div>
                <div className='hamburger-menu-radar'>
                    <p>Radar</p>
                </div>
                <div className='hamburger-menu-warnings'>
                    <img src='./warning.png' className='hamburger-menu-warnings-image' alt='warning icon' />
                </div>

            </div>
        )
    }
}

export default HamburgerMenu;