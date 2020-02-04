import React from "react";
import { Navbar } from "./navbar";
import { Card } from "./card";
import { Jjumbotron } from "./jumbotron";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />
			<Jjumbotron />

			<div className="text-center mt-5">
				<div className="d-flex justify-content-around">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</>
	);
}
