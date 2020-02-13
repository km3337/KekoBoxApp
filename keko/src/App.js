import React from 'react';
import './App.css';

function App() {
  return (
  	<TextForm />
  
    );
}
function ReverseText(props){
	return (
		<h2> {props.value.split("").reverse().join("")} </h2>
		);

}


class TextForm extends React.Component{
	///component which holds the main functionality of the webapp.
	//has a form for entering text.
	//uses several functions to transform and render the text asynchronously 
	constructor(props) {
    	super(props);
    	this.state = {value:''};
  	}

	render() {
		return (
			<>
				<div className='main-text'>
				<h3>Enter text here</h3>
          		<input type="text" Placeholder="Enter text here..." />
				</div>

				<h3> tranformed! </h3>
				<div className='transform-text'>
				

				</div>
			</>


			);

	}

}


export default App;

