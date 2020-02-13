import React from 'react';
import './App.css';

function App() {
  return (
  	<TextForm />
  
    );
}
function ReverseText(props){
	return (
		<p> {props.value.split("").reverse().join("")} </p>
		);

}

function AllCaps(props){
	return(
		<p> {props.value.toUpperCase()}  </p> 
	);
}

function LargerFont(props){
	return(
	<p style={{fontSize: '300%'}}> {props.value} </p>
	)
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
				<h2>Input</h2>
          		<input type="text" Placeholder="Enter text here..." />
				</div>

				<h2> transformed! </h2>
				<div className='transform-text'>
					<ReverseText value='lorem'/>
					<AllCaps value='ipsum'/>
					<LargerFont value='hodor'/>


				</div>
			</>


			);

	}

}


export default App;

