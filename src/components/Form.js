import React, { Component } from "react";

export default class Form extends Component {
	render() {
		return (
			<div className="form">
				<form onSubmit={this.props.submit} name="pilot" className="pilot-form">
					<h2>What is your name, pilot?</h2>
					<input
						onChange={this.props.change}
						type="text"
						className="form-control"
						placeholder="Enter your name..."
					/>
					<button className="form-control btn btn-primary" type="submit">
						Submit
					</button>
				</form>
				<h3 className="pilot">{this.props.name}</h3>
			</div>
		);
	}
}
