import React from 'react';
import Card from 'react-bootstrap/Card'
class Weather extends React.Component{

    render(){
        return(
           <>
           {
             this.props.weatherInfo.map((item)=>{
               return(
              <Card border="info" style={{ width: '18rem' }}> 
              
              <Card.Body>
                <Card.Title>Weather Case for : {item.date}</Card.Title>
                <Card.Text>
          The description: {item.description}
                </Card.Text>
              </Card.Body>
            </Card>
               )
             })
           }
  
           
           
           </> 
        )
    }
}

export default Weather;