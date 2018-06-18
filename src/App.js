import React from 'react';
import MovieCard from './components/MovieCard.js'
// import './App.css';

// const API_KEY = "ad13367e";

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

  render() {
    return (
      <div className="App">
       <MovieCard />
      </div>
    );
  }
}

export default App;
