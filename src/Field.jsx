/* eslint-disable react/prop-types */
import { useState } from "react";
import { FieldLayout } from "./layout/FieldLayout";
import { Cross } from "./Cross";
import { Zero } from "./Zero";

const getFieldBaseState = (size, fillWith = null) => {
	const arr = [];

	for (let i = 0; i < size * size; i++) {
		const y = Math.floor(i / size);
		const x = i - size * y;
		arr.push({ x: String(x), y: String(y), fillWith: fillWith });
	}
	return arr;
};

const updateFieldState = (field, x, y, fillWith) => {
	const newFieldState = field.map((cell) =>
		cell.x === x && cell.y === y && cell.fillWith === null
			? {
					x: cell.x,
					y: cell.y,
					fillWith: fillWith,
				}
			: {
					x: cell.x,
					y: cell.y,
					fillWith: cell.fillWith,
				},
	);
	const firstPlayerState = [];
	let arr1 = new Array(8).fill(0);
	let test = [
		(a, b) => a === b,
		(a, b) => a === 2 - b,
		(a, b) => a === 0,
		(a, b) => a === 1,
		(a, b) => a === 2,
		(a, b) => b === 0,
		(a, b) => b === 1,
		(a, b) => b === 2,
	];
	newFieldState.forEach((el) => {
		if (el.fillWith === "cross") {
			//firstPlayerState.push(el);
			test.forEach((num, i) => {
				const r = num(Number(el.x), Number(el.y));
				r && arr1[i]++;
				//console.log(r, i, el.x, el.y);
			});
		}
	});

	// firstPlayerState.forEach((el) => {
	// 	test.forEach((num, i) => {
	// 		const r = num(Number(el.x), Number(el.y));
	// 		r && arr1[i]++;
	// 		//console.log(r, i, el.x, el.y);
	// 	});
	// 	// el.x === el.y ? (arr1[0] = arr1[0] + 1) : false;
	// 	// el.x === 2 - el.y && arr1[1]++;
	// 	// el.x === 0 && arr1[2]++;
	// 	// el.x === 1 && arr1[3]++;
	// 	// el.x === 2 && arr1[4]++;
	// 	// el.y === 0 && arr1[5]++;
	// 	// el.y === 1 && arr1[6]++;
	// 	// el.y === 2 && arr1[7]++;
	// });
	const isFirstPlayerWin = arr1.some((num) => num === 3);
	console.log(isFirstPlayerWin, arr1);
	return { newFieldState: newFieldState, firstPlayerState: firstPlayerState };
};

export const Field = ({ turn, setTurn }) => {
	const size = 3;
	const [field, setField] = useState(getFieldBaseState(size));

	const makeMove = (event) => {
		const { target } = event;

		if (
			turn === "player_1" &&
			!target.dataset.state &&
			!target.parentNode.dataset.state
		) {
			setField(
				(prev) =>
					updateFieldState(
						prev,
						target.dataset.posx,
						target.dataset.posy,
						"cross",
					).newFieldState,
			);

			setTurn("player_2");
		} else if (
			turn === "player_2" &&
			!target.dataset.state &&
			!target.parentNode.dataset.state
		) {
			setField(
				(prev) =>
					updateFieldState(
						prev,
						target.dataset.posx,
						target.dataset.posy,
						"zero",
					).newFieldState,
			);

			setTurn("player_1");
		}
	};

	return (
		<FieldLayout
			size={size}
			currentFieldState={field}
			makeMove={makeMove}
			cross={<Cross />}
			zero={<Zero />}
		/>
	);
};
