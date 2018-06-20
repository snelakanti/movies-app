// import React from 'react';

// class Form extends React.Component{

//     render(){
//        return (
// <form onSubmit = {this.props.getMovie}>
//     <input type="text" name ="title" placeholder = "Name..."/>
//     <button>Get Movie</button>
// </form>
//         );
//     }
      
//     };
// export default Form;

import $ from 'jquery';

function getMovies() {
return $.ajax({
url: "http://www.omdbapi.com/?apikey=ad13367e&s=back",
type: "GET",
crossDomain: true
});
}

export default getMovies;
