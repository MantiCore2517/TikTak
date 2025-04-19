/* eslint-disable react/prop-types */
// import { Information } from "../components/Information";
// import { Field } from "../components/Field";

// export const AppLayout = () => {
// 	return (
// 		<>
// 			<Information />
// 			<Field />
// 		</>
// 	);
// };
import React from "react";
import { Information } from "../components/Information";
import { Field } from "../components/Field";

export class AppLayout extends React.Component {
	render() {
		return (
			<>
				<Information />
				<Field />
			</>
		);
	}
}
