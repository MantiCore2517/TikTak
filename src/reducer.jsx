export const initialState = {
	gameState: "start",
	turn: "player_1",
	fieldState: [],
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case "SET_GAME_STATE":
			return {
				...state,
				gameState: payload,
			};
		case "SET_TURN":
			return {
				...state,
				turn: payload,
			};
		case "SET_FIELD_STATE":
			return {
				...state,
				fieldState: payload,
			};
		default:
			return state;
	}
};
