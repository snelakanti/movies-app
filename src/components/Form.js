import React from 'react';

class Form extends React.Component{

    render(){
       return (
<form onSubmit = {this.props.getMovie}>
    <input type="text" name ="title" placeholder = "Name..."/>
    <button>Get Movie</button>
</form>
        );
    }
      
    };
export default Form;