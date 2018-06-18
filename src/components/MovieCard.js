import React from 'react';

class MovieCard extends React.Component{

    render(){
    return(
<div>
    MovieCard component
    <button onClick = {this.props.getMovie}>Movies</button>
</div>
    )}
}

export default MovieCard;