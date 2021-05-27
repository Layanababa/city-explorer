import React from 'react';
import Card from 'react-bootstrap/Card'
class Movies extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     moviesInfo:{}
  //   }
  //   console.log(this.props.moviesInfo);
  // }

  render() {
    return (
      <>
        {
          this.props.moviesInfo.map((item) => {
              return(
<Card border="info" style={{ width: '18rem' }}>
              <Card.Body>
            <Card.Title>Movies</Card.Title>
            <Card.Text>
      
                    Title : {item.title}<br></br>
            Overview : {item.overview}<br></br>
            Average Votes : {item.average_votes}<br></br>
            Total Votes : {item.total_votes}<br></br>
            Image_url : {item.image_url}<br></br>
            Popularity : {item.popularity}<br></br>
            Released_on :  {item.released_on}<br></br>
           
            </Card.Text>
          </Card.Body>
        </Card>
              )
              

          })
        }
        <p>
          moooovies
           </p>



      </>
    )
  }
}

export default Movies;