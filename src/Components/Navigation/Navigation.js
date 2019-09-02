import React from 'react';
import SidebarNav from './SidebarNav';
import HamburgerMenu from './HamburgerMenu';
import Media from 'react-media';
import './navigation.css'


class Navigation extends React.Component {

    

    render(){

        // const isMobile = useMediaQuery({query : '(max-width: 600px)'});

        // console.log(isMobile);
        if(this.props.displayNav){
            return (
            
                <SidebarNav displayNav={this.props.displayNav} onNavSearchClick={this.props.onNavSearchClick} onDefaultCityClick={this.props.onDefaultCityClick} />
                
            ) 
        } else {
            return (
                null
            )
        }
        
    }
}

export default Navigation;