export const updateFieldState = (field, target, fillWith) => {
	const x = target.dataset.posx;
	const y = target.dataset.posy;
	const newFieldState = field.map((cell) =>
		cell.x === x && cell.y === y && cell.fillWith === null
			? {
					x: cell.x,
					y: cell.y,
					fillWith: fillWith,
				}
			: {
					x: cell.x,
					y: cell.y,
					fillWith: cell.fillWith,
				},
	);

	return newFieldState;
};

export const fieldUpdateState = (field, target, fillWith) => ({
	type: "SET_FIELD_STATE",
	payload: updateFieldState(field, target, fillWith),
});
