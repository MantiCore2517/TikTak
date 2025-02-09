/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FieldLayout } from "./layout/FieldLayout";
import { Cross } from "./Cross";
import { Zero } from "./Zero";
import {
	fieldState,
	updateFieldState,
	checkEndGameCondition,
} from "./fieldStateController";

export const Field = ({ turn, setTurn, gameState, setGameState }) => {
	const size = 3;
	const [field, setField] = useState([]);

	useEffect(() => {
		checkEndGameCondition(field, size, setGameState);
	}, [field, setGameState]);

	useEffect(() => {
		if (gameState === "gameStarting") {
			fieldState(size, setField).game;
		}
	}, [gameState]);

	const makeMove = (event) => {
		const { target } = event;
		if (gameState === "game" || gameState === "gameStarting") {
			setGameState("game");
			if (
				turn === "player_1" &&
				!target.dataset.state &&
				!target.parentNode.dataset.state
			) {
				setField((prev) =>
					updateFieldState(
						prev,
						target.dataset.posx,
						target.dataset.posy,
						"cross",
					),
				);

				setTurn("player_2");
			} else if (
				turn === "player_2" &&
				!target.dataset.state &&
				!target.parentNode.dataset.state
			) {
				setField((prev) =>
					updateFieldState(
						prev,
						target.dataset.posx,
						target.dataset.posy,
						"zero",
					),
				);

				setTurn("player_1");
			}
		}
	};

	return (
		<>
			<FieldLayout
				size={size}
				currentFieldState={field}
				makeMove={makeMove}
				cross={<Cross />}
				zero={<Zero />}
			/>
		</>
	);
};
