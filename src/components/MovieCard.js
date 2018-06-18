import React from 'react';

class MovieCard extends React.Component{

    render(){
    return(
<div>
    MovieCard component
    Title: {this.props.Title}
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
    