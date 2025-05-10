import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = () => {
  return (
    <div>
        <Helmet>
            <title>Weather App</title>
            <meta name='description' content='Welcome to the Home Page of Weather app.'/>
            <meta name='keywords' content='Weather, React, Vercel, Temperature, weather app, live weather, current weather, accurate weather forecast'/>
        </Helmet>
      
    </div>
  )
}

export default Meta;
