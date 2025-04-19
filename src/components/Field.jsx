/* eslint-disable react/prop-types */
// import { useEffect } from "react";
// import { FieldLayout } from "./layout/FieldLayout";
// import { checkEndGameCondition } from "./fieldStateController";
// import { fieldSize } from "../config.json";
// import { useSelector, useDispatch } from "react-redux";
// import { selectGameState, selectTurnState, selectFieldState } from "./selectors";
// import {
// 	fieldGameStarting,
// 	gameGame,
// 	turnFirstPlayer,
// 	turnSecondPlayer,
// 	fieldUpdateState,
// } from "./actions";

// export const Field = () => {
// 	const dispatch = useDispatch();
// 	const gameState = useSelector(selectGameState);
// 	const turn = useSelector(selectTurnState);
// 	const field = useSelector(selectFieldState);

// 	useEffect(() => {
// 		checkEndGameCondition(field, fieldSize, dispatch);
// 	}, [field]);

// 	useEffect(() => {
// 		gameState === "gameStarting" && dispatch(fieldGameStarting(fieldSize));
// 	}, [gameState]);

// 	const makeMove = (event) => {
// 		const { target } = event;
// 		if (gameState === "game" || gameState === "gameStarting") {
// 			dispatch(gameGame);
// 			if (
// 				turn === "player_1" &&
// 				!target.dataset.state &&
// 				!target.parentNode.dataset.state
// 			) {
// 				dispatch(fieldUpdateState(field, target, "cross"));
// 				dispatch(turnSecondPlayer);
// 			} else if (
// 				turn === "player_2" &&
// 				!target.dataset.state &&
// 				!target.parentNode.dataset.state
// 			) {
// 				dispatch(fieldUpdateState(field, target, "zero"));
// 				dispatch(turnFirstPlayer);
// 			}
// 		}
// 	};

// 	const props = {
// 		hidden: gameState === "start",
// 		size: fieldSize,
// 		currentFieldState: field,
// 		makeMove: makeMove,
// 	};

// 	return (
// 		<>
// 			<FieldLayout {...props} />
// 		</>
// 	);
// };
import React from "react";
import { connect } from "react-redux";
import { FieldLayout } from "../layout/FieldLayout";
import { checkEndGameCondition } from "../fieldStateController";
import { fieldSize } from "../../config.json";
import { selectGameState, selectTurnState, selectFieldState } from "../selectors";
import {
	fieldGameStarting,
	gameGame,
	turnFirstPlayer,
	turnSecondPlayer,
	fieldUpdateState,
} from "../actions";

class FieldComponent extends React.Component {
	componentDidUpdate(prevProps) {
		if (this.props.field !== prevProps.field) {
			checkEndGameCondition(this.props.field, fieldSize, this.props.dispatch);
		}

		if (
			this.props.gameState === "gameStarting" &&
			this.props.gameState !== prevProps.gameState
		) {
			this.props.fieldGameStarting(fieldSize);
		}
	}

	makeMove = (event) => {
		const { target } = event;
		const {
			gameState,
			turn,
			field,
			gameGame,
			fieldUpdateState,
			turnSecondPlayer,
			turnFirstPlayer,
		} = this.props;

		if (gameState === "game" || gameState === "gameStarting") {
			gameGame();
			if (
				turn === "player_1" &&
				!target.dataset.state &&
				!target.parentNode.dataset.state
			) {
				fieldUpdateState(field, target, "cross");
				turnSecondPlayer();
			} else if (
				turn === "player_2" &&
				!target.dataset.state &&
				!target.parentNode.dataset.state
			) {
				fieldUpdateState(field, target, "zero");
				turnFirstPlayer();
			}
		}
	};

	render() {
		const props = {
			hidden: this.props.gameState === "start",
			size: fieldSize,
			currentFieldState: this.props.field,
			makeMove: this.makeMove,
		};

		return (
			<>
				<FieldLayout {...props} />
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	gameState: selectGameState(state),
	turn: selectTurnState(state),
	field: selectFieldState(state),
});

const mapDispatchToProps = {
	fieldGameStarting,
	gameGame: () => gameGame,
	turnFirstPlayer: () => turnFirstPlayer,
	turnSecondPlayer: () => turnSecondPlayer,
	fieldUpdateState,
	dispatch: (action) => action,
};

export const Field = connect(mapStateToProps, mapDispatchToProps)(FieldComponent);
