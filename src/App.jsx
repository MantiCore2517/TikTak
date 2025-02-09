import { AppLayout } from "./layout/AppLayout";
import { Field } from "./Field";
import { Information } from "./Information";
import { useState } from "react";

export const App = () => {
	const [gameState, setGameState] = useState("start");
	const [turn, setTurn] = useState("player_1");

	const props = {
		information: (
			<Information gameState={gameState} setGameState={setGameState} turn={turn} />
		),
		field: (
			<Field
				turn={turn}
				setTurn={setTurn}
				gameState={gameState}
				setGameState={setGameState}
			/>
		),
	};
	return <AppLayout {...props} />;
};
