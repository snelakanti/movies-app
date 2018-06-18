import React from 'react';
import MovieCard from './components/MovieCard.js'
import Form from './components/Form.js'
// import './App.css';

const API_KEY = "ad13367e";

class App extends React.Component {

  state = {
    Title: undefined,
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
    const TITLE = e.target.elements.title.value; 
    const API_CALL = await fetch(` http://www.omdbapi.com/?t=${TITLE}&apikey=${API_KEY}`);
    const data = await API_CALL.json();
    console.log(data)
    this.setState({
    Title: data.Title,  
    Poster: data.Poster,
    Released: data.Released,
    Rated: data.Rated,
    Genre: data.Genre,
    Website: data.Website,
    Awards: data.Awards,
    Ratings: data.Ratings,
    error: ''
    });
  }
  
  render() {
    return (
      <div className="App">
       <Form getMovie = {this.getMovie}/>
       <MovieCard Title = {this.state.Title}/>
      </div>
    );
  }
}

export default App;
