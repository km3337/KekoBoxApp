import React from 'react';
import './App.css';
import './TextForm.css';

function App() {
  return (
  	<TextForm />
  
    );
}

function ReverseText(props){
	return (
		<>
		<p style={{border:'5 px color black'}}> {props.value.split("").reverse().join("")} </p>
		</>
		);
	}

function AllCaps(props){
	return(
	<>
		<p> {props.value.toUpperCase()}  </p> 
	</>
	);
}

function LargerFont(props){
	return(
	<>
	<p style={{fontSize: '300%'}}> {props.value} </p>
	</>
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

  	handleChange = (e) => {
    this.setState({value: e.currentTarget.value});
  	}


	render() {
		return (
			<>
				<div className='main-text'>
				<h2>Input</h2>
          		<input type="text" Placeholder="Enter text here..." onChange={this.handleChange} />
				</div>

				
				<div className='transform-text'>
					<h2> transformed! </h2>
					<ReverseText value={this.state.value}/>
					<AllCaps value={this.state.value}/>
					<LargerFont value={this.state.value}/>


				</div>
			</>


			);

	}

};


export default App;

