import React from 'react';
import MovieCard from './components/MovieCard.js'
// import './App.css';

const API_KEY = "ad13367e";

class App extends React.Component {

  state = {
    Poster: undefined,
    Released: undefined,
    Rated: undefined,
    Genre: undefined,
    Website: undefined,
    Awards: undefined,
    Ratings: undefined,
    error: undefined
  }

  getMovie = async (e) => {
    e.preventDefault();
    const API_CALL = await fetch(` http://www.omdbapi.com/?i=tt3896198&apikey=ad13367e`);
    const data = await API_CALL.json();
    console.log(data)
    // this.setState({
    // Poster: data.Poster,
    // Released: data.Title,
    // Rated: data.Rated,
    // Genre: data.Genre,
    // Website: data.Website,
    // Awards: data.Awards,
    // Ratings: data.Ratings,
    // error: ''
    // });
  }
  
  render() {
    return (
      <div className="App">
       <MovieCard getMovie = {this.getMovie}/>
      </div>
    );
  }
}

export default App;
