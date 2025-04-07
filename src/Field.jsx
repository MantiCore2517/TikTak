/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { FieldLayout } from "./layout/FieldLayout";
import { checkEndGameCondition } from "./fieldStateController";
import { fieldSize } from "../config.json";
import { useSelector, useDispatch } from "react-redux";
import { selectGameState, selectTurnState, selectFieldState } from "./selectors";
import {
	fieldGameStarting,
	gameGame,
	turnFirstPlayer,
	turnSecondPlayer,
	fieldUpdateState,
} from "./actions";

export const Field = () => {
	const dispatch = useDispatch();
	const gameState = useSelector(selectGameState);
	const turn = useSelector(selectTurnState);
	const field = useSelector(selectFieldState);

	useEffect(() => {
		checkEndGameCondition(field, fieldSize, dispatch);
	}, [field]);

	useEffect(() => {
		gameState === "gameStarting" && dispatch(fieldGameStarting(fieldSize));
	}, [gameState]);

	const makeMove = (event) => {
		const { target } = event;
		if (gameState === "game" || gameState === "gameStarting") {
			dispatch(gameGame);
			if (
				turn === "player_1" &&
				!target.dataset.state &&
				!target.parentNode.dataset.state
			) {
				dispatch(fieldUpdateState(field, target, "cross"));
				dispatch(turnSecondPlayer);
			} else if (
				turn === "player_2" &&
				!target.dataset.state &&
				!target.parentNode.dataset.state
			) {
				dispatch(fieldUpdateState(field, target, "zero"));
				dispatch(turnFirstPlayer);
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
