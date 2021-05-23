import React from 'react';
import axios from 'axios';

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
      <h1>
        City Explorer
      </h1>
      <form onSubmit={this.getResult}>
        <input type='text' placeholder='Add a city name.' onChange={this.requiredLocation} />
        <input type='submit' value='Get a result.'/>
        <p>
        The Location : {this.state.locationData.display_name}
      </p>
      </form>
     
      {this.state.show&&
      <img
      src={`https://maps.locationiq.com/v3/staticmap?key=pk.5940b4e56c7b6248e4e98fb6a9efd8e4&center=${this.state.locationData.lat},${this.state.locationData.lon}`} alt=''
      />
      }
      </>
    )
    }
  }

export default App;
