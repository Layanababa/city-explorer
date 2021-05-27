import React from 'react';
import Card from 'react-bootstrap/Card'
import WeatherDay from './WeatherDay';

class Weather extends React.Component{

    render(){
        return(
           <>


           {
             this.props.weatherInfo.map((item)=>{
               return(
                <WeatherDay
                date={item.date}
                description={item.description}
                ></WeatherDay>
               )
             })
           }
  
           
           
           </> 
        )
    }
}

export default Weather;