import React from 'react';
import Card from 'react-bootstrap/Card'
import MoviesDay from './MoviesDay';

class Movies extends React.Component {
  

  render() {
    return (
      <>
{
          this.props.moviesInfo.map((item) => {
              return(
<MoviesDay
      title={item.title}
      overview={item.overview}
      average_votes= {item.average_votes}
      total_votes= {item.total_votes}
      image_url={item.image_url}
      popularity= {item.popularity}
      released_on={item.released_on}
      >


      </MoviesDay>
              )
              

          })
        }
      
               


      </>
    )
  }
}

export default Movies;