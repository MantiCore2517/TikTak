// export const CrossLayout = () => {
// 	return (
// 		<>
// 			<div
// 				className="absolute w-30 h-2 rotate-45 bg-gray-300 place-self-center rounded-full inset-ring-1
// 			 inset-ring-[#3a393977]"
// 			></div>
// 			<div
// 				className="absolute w-30 h-2 rotate-135 bg-gray-300 place-self-center rounded-full inset-ring-1
// 			 inset-ring-[#3a393977]"
// 			></div>
// 		</>
// 	);
// };
import React from "react";

export class CrossLayout extends React.Component {
	render() {
		return (
			<>
				<div
					className="absolute w-30 h-2 rotate-45 bg-gray-300 place-self-center rounded-full inset-ring-1
           inset-ring-[#3a393977]"
				></div>
				<div
					className="absolute w-30 h-2 rotate-135 bg-gray-300 place-self-center rounded-full inset-ring-1
           inset-ring-[#3a393977]"
				></div>
			</>
		);
	}
}
