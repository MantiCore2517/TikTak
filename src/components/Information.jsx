/* eslint-disable react/prop-types */
// import { InformationLayout } from "./layout/InformationLayout";
// import { useSelector } from "react-redux";
// import { selectGameState, selectTurnState } from "./selectors";
// import { useDispatch } from "react-redux";
// import { gameStarting } from "./actions";

// export const Information = () => {
// 	const dispatch = useDispatch();

// 	const onPlay = () => dispatch(gameStarting);

// 	const onRefresh = () => dispatch(gameStarting);

// 	const gameState = useSelector(selectGameState);
// 	const turn = useSelector(selectTurnState);

// 	return (
// 		<InformationLayout
// 			gameState={gameState}
// 			turn={turn}
// 			onPlay={onPlay}
// 			onRefresh={onRefresh}
// 		/>
// 	);
// };

import React from "react";
import { connect } from "react-redux";
import { InformationLayout } from "../layout/InformationLayout";
import { selectGameState, selectTurnState } from "../selectors";
import { gameStarting } from "../actions"; // Импортируем объект экшена

class InformationComponent extends React.Component {
	render() {
		const { gameState, turn, onPlay, onRefresh } = this.props;

		return (
			<InformationLayout
				gameState={gameState}
				turn={turn}
				onPlay={onPlay}
				onRefresh={onRefresh}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	gameState: selectGameState(state),
	turn: selectTurnState(state),
});

const mapDispatchToProps = (dispatch) => ({
	onPlay: () => dispatch(gameStarting),
	onRefresh: () => dispatch(gameStarting),
});

export const Information = connect(
	mapStateToProps,
	mapDispatchToProps,
)(InformationComponent);
