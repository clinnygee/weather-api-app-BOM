import React from 'react';

import './App.css';
import WeatherApp from '../WeatherApp';
// import './WeatherIcons/weather-icons.css';
// import './font/weathericons-regular-webfont.svg';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
 
library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <WeatherApp />
  );
}

export default App;
