import React from 'react';

class MovieCard extends React.Component{

    render(){
    return(
<div>
    MovieCard component
    Released: {this.props.Released}

    <button onClick = {this.props.getMovie}>Movies</button>
</div>
    )}
}

export default MovieCard;


    
    // Poster: data.Poster,
    // Released: data.Title,
    // Rated: data.Rated,
    // Genre: data.Genre,
    // Website: data.Website,
    // Awards: data.Awards,
    // Ratings: data.Ratings,
    // error: ''
    