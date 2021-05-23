import React from 'react';
import axios from 'axios';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      location:'',
      locationData:'',
      show:false,
      errorMessage:false
    }
  }

  getResult=async(item)=>{
    item.preventDefault();

    let locationURL=` https://eu1.locationiq.com/v1/search.php?key=pk.5940b4e56c7b6248e4e98fb6a9efd8e4&q=${this.state.location}&format=json`;

    try{
      let resultURl= await axios.get(locationURL);
      this.setState({
        locationData:resultURl.data[0],
        show:true

      })
    }
  

  catch {
    this.setState({
      show:false,
      errorMessage:true
    })
  }
  }
  requiredLocation=(event)=>{
    this.setState({
      location:event.target.value
    })

  }


  render() {
    return(
      <>
      <h1 style={{textAlign:'center', background:'#f6e6e4', color:'#114e60' , margin:'0 5px 20px 5px' , padding:'30px', fontSize:'bold',fontWeight:'20px'}}>
        City Explorer
      </h1>
      <Form onSubmit={this.getResult} >
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Location Name:  </Form.Label>
    <Form.Control onChange={this.requiredLocation} type="text" placeholder="Add a city name." />
  </Form.Group>
  <Button variant="primary" type="submit">
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
</Form>
      {/* <form onSubmit={this.getResult} >
        <div style={{ padding:'15px'}}>
        <input type='text' placeholder='Add a city name.' onChange={this.requiredLocation} />
        </div>
        
        <div style={{padding:'15px'}}>
        <input type='submit' value='Get a result.'/>
        </div>
        
        
      </form>
      <p>
        The Location : {this.state.locationData.display_name}
      </p>
      {this.state.show&&
      <img style={{width:'250px',height:'250px'}}
      src={`https://maps.locationiq.com/v3/staticmap?key=pk.5940b4e56c7b6248e4e98fb6a9efd8e4&center=${this.state.locationData.lat},${this.state.locationData.lon}`} alt=''
      />
      } */}
      </>
    )
    }
  }

export default App;
