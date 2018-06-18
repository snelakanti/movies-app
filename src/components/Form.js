import React from 'react';

const Form = props => (

<form onSubmit = {props.getMovies}>
    <input type="text" name ="title" placeholder = "Name..."/>
    <button>Get Movie</button>
</form>
        );
  

export default Form;