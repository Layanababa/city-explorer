import React from 'react';
import Card from 'react-bootstrap/Card'
class WeatherDay extends React.Component{

    render(){
        return(
           <>
           
            
               
              <Card border="info" style={{ width: '18rem' }}> 
              
              <Card.Body>
                <Card.Title>Weather Case for : {this.props.date}</Card.Title>
                <Card.Text>
          The description: {this.props.description}
                </Card.Text>
              </Card.Body>
            </Card>
              
           
         
  
           
           
           </> 
        )
    }
}

export default WeatherDay;