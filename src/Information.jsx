/* eslint-disable react/prop-types */
import { InformationLayout } from "./layout/InformationLayout";
import { useSelector } from "react-redux";
import { selectGameState, selectTurnState } from "./selectors";
import { useDispatch } from "react-redux";
import { gameStarting } from "./actions";

export const Information = () => {
	const dispatch = useDispatch();

	const onPlay = () => dispatch(gameStarting);

	const onRefresh = () => dispatch(gameStarting);

	const gameState = useSelector(selectGameState);
	const turn = useSelector(selectTurnState);

	return (
		<InformationLayout
			gameState={gameState}
			turn={turn}
			onPlay={onPlay}
			onRefresh={onRefresh}
		/>
	);
};
