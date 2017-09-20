import React, { Component } from "react";
import "../styles/App.css";
import axios from "axios";
import Jumbotron from "./Jumbotron";
import Form from "./Form";
import VehicleCard from "./VehicleCard";

class App extends Component {
	// PROPS AND STATE
	// Set props and state below.
	// You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
	// Enter your code below:
	constructor() {
		super();
		this.state = {
			vehicles: [],
			value: "",
			input: "",
			pilot: ""
		};
	}

	// FORM: HANDLE INPUT CHANGES
	// handleNameChange below:
	// See form lesson for details.
	// Enter your code below:
	_handleNameChange = event => {
		console.log("Handling name change");
		this.setState({
			input: event.target.value
		});
	};

	//  FORM: SUBMIT METHOD
	// handleSubmit below:
	// See form lesson for details.
	// Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
	// Then, set the value of the input back to an empty string.
	// Enter your code below:
	_handleSubmit = event => {
		console.log("handling submit");
		console.log(event.target[0]);
		event.preventDefault();
		this.setState({
			pilot: this.state.input
		});
		event.target[0].value = "";
	};

	// LIFECYCLE
	// Which lifecycle is best for fetching data?
	// Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
	// Once you have fetched that data, set the state of vehicles to the fetched data.
	// In your response look for 'results'. It should return this array.
	// You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
	// Enter your code below:
	_handleVehicles = async () => {
		console.log(this);
		let vehicles;
		await axios
			.get("https://swapi.co/api/vehicles/")
			.then(function(response) {
				vehicles = response.data.results;
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});

		this.setState({
			vehicles: vehicles
		});
	};
	componentDidMount() {
		this._handleVehicles();
	}

	// RENDER
	// Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
	// Map over the data.
	// Don't forget to set the 'key'. In this case, use the vehicle name.
	// You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
	// Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
	// Enter your code below:

	render() {
		/*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */
		return (
			<div className="App">
				<Jumbotron />
				<Form
					name={this.state.pilot}
					change={this._handleNameChange}
					submit={this._handleSubmit}
				/>
				<div className="vehicles">
					{this.state.vehicles.map(vehicle => {
						return <VehicleCard vehicle={vehicle} />;
					})}
				</div>
			</div>
		);
	}
}

export default App;
