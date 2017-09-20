import React from "react";

export default function VehicleCard(props) {
	return (
		<div className="card">
			<div className="card-block">
				<h4 className="card-title">Vehicle: {props.vehicle.name}</h4>
				<h5 className="secondary-text">Model: {props.vehicle.model}</h5>
				<hr />
				<p className="card-text">Manufacturer: {props.vehicle.manufacturer}</p>
				<hr />
				<p className="card-text">Class: {props.vehicle.vehicle_class}</p>
				<hr />
				<p className="card-text">Passengers: {props.vehicle.passengers}</p>
				<hr />
				<p className="card-text">Crew: {props.vehicle.crew}</p> <hr />
				<p className="card-text">Length: {props.vehicle.length}</p>
				<hr />
				<p className="card-text">
					Max Speed: {props.vehicle.max_atmosphering_speed}
				</p>
				<hr />
				<p className="card-text">
					Cargo Capacity: {props.vehicle.cargo_capacity}
				</p>
			</div>
		</div>
	);
}
