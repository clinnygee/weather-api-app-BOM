import React from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css'


class Map extends React.Component {

    state = {
        center: {
            lat: 59.95,
            lng: 30.33,
        },
        zoom: 11,
    };

    render(){
        return (
            <section className='map-container'>
                <div className='map-container-header'>
                    <p>Brisbane (Mt Stapylton) Radar</p>
                </div>
                <div className='map-container-content'>
                    <GoogleMapReact
                        bootstrapURLKeys={{key: 'AIzaSyDaqXDtwm3M51qPezZ-Ydq_CXpo8PHYV8o'}}
                        defaultCenter={{lat: this.props.lat, lng: this.props.lng}}
                        defaultZoom={this.state.zoom}
                    />
                </div>
            </section>
        )
    }
}

export default Map;