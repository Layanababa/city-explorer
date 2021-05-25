import React from 'react';
import axios from 'axios';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Weather from './Weather';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      location:'',
      locationData:'',
      show:false,
      errorMessage:false,
      alertShow:false,
      weatherShow:false,
      weatherInfo:{}

    }
  }

  getResult=async(item)=>{
    item.preventDefault();

    let locationURL=` https://eu1.locationiq.com/v1/search.php?key=pk.5940b4e56c7b6248e4e98fb6a9efd8e4&q=${this.state.location.toLowerCase()}&format=json`;


    const serverURl=process.env.REACT_APP_SERVER
    const url = `${serverURl}/weather?locationName=${this.state.location.toLowerCase()}`;
   
      
      try{
        const weatherData = await axios.get(url);
      let resultURl= await axios.get(locationURL);
      this.setState({
        locationData:resultURl.data[0],
        show:true,
        alertShow:false,
        weatherShow:true,    
        weatherInfo:weatherData.data
      })
    }
  

  catch {
    this.setState({
      show:false,
      errorMessage:true,
      alertShow:true,
      weatherShow:false
      
     
    })
  }
  }
  requiredLocation=(event)=>{
    this.setState({
      location:event.target.value
    })

  }

  // getWeatherData=async()=>{
  //   let serverRoute = process.env.REACT_APP_SERVER;

  //   const url = `${serverRoute}/weather?locationName=${this.state.location}`;
   
  //   const locationArr = await axios.get(url);
  //   console.log(locationArr.data);
  //   this.setState({
  //     weatherInfo:locationArr.data
  //   })

  // }


  render() {
    return(
      <>
      <h1 style={{textAlign:'center', background:'#f6e6e4', color:'#114e60' , margin:'0 5px 20px 5px' , padding:'30px', fontSize:'bold',fontWeight:'20px'}}>
        City Explorer
      </h1>
      <Form onSubmit={this.getResult}  style={{marginLeft:'600px'}}  >
  <Form.Group controlId="formGroupEmail">
    <Form.Label style={{borderRadius:'10px', padding:'13px', background:'#f6e6e4',color:'#114e60', fontSize:'18px',borderStyle:'solid ', borderWidth:'2px'}}>Location Name:  </Form.Label>
    <Form.Control onChange={this.requiredLocation} type="text" placeholder="Add a city name." style={{borderRadius:'10px', padding:'15px', background:'#f6e6e4',color:'#114e60', fontSize:'18px', marginLeft:'20px', borderWidth:'2px'}} />
  </Form.Group>
  <Button 
 style={{marginLeft:'150px',marginTop:'20px', color :'#114e60',background:'#f6e6e4',padding:'5px', borderRadius:'5px', borderWidth:'2px'}} variant="primary" type="submit">
  Get a result
  </Button >
  <Form.Group controlId="formGroupEmail">
  <Form.Text className="text-muted">
   {this.state.locationData.display_name}
  
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
  <Form.Text className="text-muted">
   
  {this.state.show&&
      <img style={{width:'250px',height:'250px'}}
      src={`https://maps.locationiq.com/v3/staticmap?key=pk.5940b4e56c7b6248e4e98fb6a9efd8e4&center=${this.state.locationData.lat},${this.state.locationData.lon}`} alt=''
      />
      }
    </Form.Text>
  </Form.Group>
  {this.state.alertShow &&

<Alert variant="danger">
Not Found!!!!!! Chooooose anoooother one!!!!!
</Alert>
}
{
  this.state.weatherShow&&
  <Weather
location={this.state.location}
weatherInfo={this.state.weatherInfo}
  />

}

</Form>

      </>
    )
    }
  }

export default App;
