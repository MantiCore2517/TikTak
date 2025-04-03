/* eslint-disable react/prop-types */
import { InformationLayout } from "./layout/InformationLayout";
import { store } from "./store";

export const Information = () => {
	const onPlay = () => {
		store.dispatch({ type: "SET_GAME_STATE", payload: "gameStarting" });
	};
	const onRefresh = () => {
		store.dispatch({ type: "SET_GAME_STATE", payload: "gameStarting" });
	};

	const gameState = store.getState().gameState;
	const turn = store.getState().turn;

	return (
		<InformationLayout
			gameState={gameState}
			turn={turn}
			onPlay={onPlay}
			onRefresh={onRefresh}
		/>
	);
};
