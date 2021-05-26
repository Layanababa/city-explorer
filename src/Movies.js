import React from 'react';
import Card from 'react-bootstrap/Card'
class Movies extends React.Component{

    render(){
        return(
           <>
           
  <Card border="info" style={{ width: '18rem' }}>
        <Card.Body>
      <Card.Title>Movies</Card.Title>
      <Card.Text>

      Title : {this.props.moviesInfo[0].title}<br></br>
      Overview : {this.props.moviesInfo[0].overview}<br></br>
      Average Votes : {this.props.moviesInfo[0].vote_average}<br></br>
      Total Votes : {this.props.moviesInfo[0].vote_count}<br></br>
      Title : {this.props.moviesInfo[1].title}<br></br>
      Overview : {this.props.moviesInfo[1].overview}<br></br>
      Average Votes :  {this.props.moviesInfo[1].vote_average}<br></br>
      Total Votes : {this.props.moviesInfo[1].vote_count}<br></br>
      Title : {this.props.moviesInfo[2].title}<br></br>
      Overview : {this.props.moviesInfo[2].overview}<br></br>
      Average Votes : {this.props.moviesInfo[2].vote_average}<br></br>
      Total Votes : {this.props.moviesInfo[2].vote_count}<br></br>
      Title : {this.props.moviesInfo[3].title}<br></br>
      Overview : {this.props.moviesInfo[3].overview}<br></br>
      Average Votes : {this.props.moviesInfo[3].vote_average}<br></br>
      Total Votes : {this.props.moviesInfo[3].vote_count}<br></br>
      Title : {this.props.moviesInfo[4].title}<br></br>
      Overview : {this.props.moviesInfo[4].overview}<br></br>
      Average Votes :  {this.props.moviesInfo[4].vote_average}<br></br>
      Total Votes : {this.props.moviesInfo[4].vote_count}<br></br>
      Title : {this.props.moviesInfo[5].title}<br></br>
      Overview : {this.props.moviesInfo[5].overview}<br></br>
      Average Votes : {this.props.moviesInfo[5].vote_average}<br></br>
      Total Votes : {this.props.moviesInfo[5].vote_count}<br></br>
      </Card.Text>
    </Card.Body>
  </Card>
           
           
           </> 
        )
    }
}

export default Movies;