/* eslint-disable react/prop-types */
import { InformationLayout } from "./layout/InformationLayout";
import { Cross } from "./Cross";
import { Zero } from "./Zero";

export const Information = ({ gameState, setGameState, turn }) => {
	const onPlay = () => {
		setGameState("gameStarting");
	};
	const onRefresh = () => {
		setGameState("gameStarting");
	};

	return (
		<InformationLayout
			gameState={gameState}
			cross={<Cross />}
			zero={<Zero />}
			turn={turn}
			onPlay={onPlay}
			onRefresh={onRefresh}
		/>
	);
};
