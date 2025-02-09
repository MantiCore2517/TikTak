/* eslint-disable react/prop-types */
import { InformationLayout } from "./layout/InformationLayout";
import { Cross } from "./Cross";
import { Zero } from "./Zero";

export const Information = ({ gameStatus, setGameStatus, turn }) => {
	const onPlay = () => {
		setGameStatus("game");
	};

	return (
		<InformationLayout
			gameStatus={gameStatus}
			cross={<Cross />}
			zero={<Zero />}
			turn={turn}
			onPlay={onPlay}
		/>
	);
};
