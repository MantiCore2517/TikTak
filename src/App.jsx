import { AppLayout } from "./layout/AppLayout";
import { Field } from "./Field";
import { Information } from "./Information";
import { useState } from "react";

export const App = () => {
	const [gameStatus, setGameStatus] = useState("start");
	const [turn, setTurn] = useState("player_1");

	const props = {
		information: (
			<Information
				gameStatus={gameStatus}
				setGameStatus={setGameStatus}
				turn={turn}
			/>
		),
		field: <Field turn={turn} setTurn={setTurn} />,
	};
	return <AppLayout {...props} />;
};
