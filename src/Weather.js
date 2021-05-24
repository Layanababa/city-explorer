import React from 'react';
import Card from 'react-bootstrap/Card'
class Weather extends React.Component{
constructor (props){
    super(props);
        this.state={
            weatherInfo:this.props.weatherInfo
        }
    
}
    render(){
        return(
           <>
           
  <Card border="info" style={{ width: '18rem' }}>
    <Card.Header> {this.props.weatherInfo[3].lat} {this.props.weatherInfo[4].lon}</Card.Header>
    <Card.Body>
      <Card.Title>Weather Case</Card.Title>
      <Card.Text>
      {this.props.weatherInfo[0].date}<br></br>
      {this.props.weatherInfo[0].description}<br></br>
      {this.props.weatherInfo[1].date}<br></br>
      {this.props.weatherInfo[1].description}<br></br>
      {this.props.weatherInfo[2].date}<br></br>
      {this.props.weatherInfo[2].description}<br></br>
      </Card.Text>
    </Card.Body>
  </Card>
           
           
           </> 
        )
    }
}

export default Weather;