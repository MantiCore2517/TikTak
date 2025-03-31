export const initialState = {};

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
		case "SET_FIELD":
			return {
				...state,
				field: payload,
			};
		default:
			return state;
	}
};
