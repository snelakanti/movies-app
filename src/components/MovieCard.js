import React from 'react';
import getMovies from './Form.js';

class MovieCard extends React.Component{

    state = {
        movies: []
      }

      componentDidMount(){
        getMovies().then(results => {
          let movies = results.Search.map((movie) =>{
            console.log(movie)
            return(
              <div key={movie.imdbID} >
                <div className="movieTitle">
                  <div className="title">
                      <h1> {movie.Title}</h1>
                  </div>
                  <div className="poster">
                    <img src={movie.Poster} alt={movie.title} />
                  </div>
                  <div className="data">
                    <div className="flex">
                        <h2>Released</h2>
                      <div className="table">
                        <p>{movie.Year}</p>
                      </div>
                    </div>
                    <hr/>
                    <div className="flex">
                        <h2>Rated</h2>
                      <div className="table">
                        <p>{movie.Rated}</p>
                      </div>
                    </div>
                    <hr/>
                    <div className="flex">
                        <h2>Genre</h2>
                      <div className="table">
                        <p>{movie.genre}</p>
                      </div>
                    </div>
                    <hr/>
                    <div className="flex">
                        <h2> Website </h2>
                      <div className="table">
                        <p><a target="_blank" href={movie.Website}> {movie.Website}</a></p>
                      </div>
                    </div>
                    <hr/>
                    <div className="flex">
                        <h2> Awards</h2>
                      <div className="table">
                        <p>{movie.Awards} </p>
                      </div>
                    </div>
                    <hr/>
                      <div className="category">
                        <h2> Ratings</h2>
                    </div>
                  </div>
                </div>
    
              </div>
            )
          })
          this.setState({movies: movies});
          console.log("state", this.state)
        })
      }
    
    
    
      render(){
        return (
          <div>
          {this.state.movies}
          </div>
              )
      }
    }

   
    {/* <p>MovieCard component</p>
    <p>Title: {this.props.Title}</p>
     <p>Poster: {this.props.Poster}</p>
    <p>Released: {this.props.Released}</p>
    <p>Rated: {this.props.Rated}</p>
    <p>Genre: {this.props.Genre}</p>
    <p>Website: {this.props.Website}</p>
    <p>Awards: {this.props.Awards}</p>
    <p>Ratings: {this.props.Ratings[0]}</p>  */}



export default MovieCard;


    
    // Poster: data.Poster,
    // Released: data.Title,
    // Rated: data.Rated,
    // Genre: data.Genre,
    // Website: data.Website,
    // Awards: data.Awards,
    // Ratings: data.Ratings,
    // error: ''
    