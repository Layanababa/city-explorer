import React from 'react';
import Card from 'react-bootstrap/Card'
class MoviesDay extends React.Component {
 
  render() {
    return (
      <>
       
          
<Card border="info" style={{ width: '18rem' }}>
              <Card.Body>
            <Card.Title>Movies</Card.Title>
            <Card.Text>
      
                    Title : {this.props.title}<br></br>
            Overview : {this.props.overview}<br></br>
            Average Votes : {this.props.average_votes}<br></br>
            Total Votes : {this.props.total_votes}<br></br>
            Image_url : {this.props.image_url}<br></br>
            Popularity : {this.props.popularity}<br></br>
            Released_on :  {this.props.released_on}<br></br>
           
            </Card.Text>
          </Card.Body>
        </Card>
             
       
        


      </>
    )
  }
}

export default MoviesDay;