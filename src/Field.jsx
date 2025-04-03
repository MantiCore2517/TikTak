/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { FieldLayout } from "./layout/FieldLayout";
import {
	fieldState,
	updateFieldState,
	checkEndGameCondition,
} from "./fieldStateController";
import { store } from "./store";
import { fieldSize } from "../config.json";

export const Field = () => {
	const gameState = store.getState().gameState;
	const turn = store.getState().turn;
	const field = store.getState().fieldState;

	useEffect(() => {
		checkEndGameCondition(field, fieldSize);
	}, [field]);

	useEffect(() => {
		if (gameState === "gameStarting") {
			fieldState(fieldSize).game;
		}
	}, [gameState]);

	const makeMove = (event) => {
		const { target } = event;
		if (gameState === "game" || gameState === "gameStarting") {
			store.dispatch({ type: "SET_GAME_STATE", payload: "game" });
			if (
				turn === "player_1" &&
				!target.dataset.state &&
				!target.parentNode.dataset.state
			) {
				store.dispatch({
					type: "SET_FIELD_STATE",
					payload: updateFieldState(
						field,
						target.dataset.posx,
						target.dataset.posy,
						"cross",
					),
				});

				store.dispatch({ type: "SET_TURN", payload: "player_2" });
			} else if (
				turn === "player_2" &&
				!target.dataset.state &&
				!target.parentNode.dataset.state
			) {
				store.dispatch({
					type: "SET_FIELD_STATE",
					payload: updateFieldState(
						field,
						target.dataset.posx,
						target.dataset.posy,
						"zero",
					),
				});

				store.dispatch({ type: "SET_TURN", payload: "player_1" });
			}
		}
	};

	const props = {
		hidden: gameState === "start",
		size: fieldSize,
		currentFieldState: field,
		makeMove: makeMove,
	};

	return (
		<>
			<FieldLayout {...props} />
		</>
	);
};
