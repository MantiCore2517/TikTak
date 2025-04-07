const getFieldBaseState = (size, fillWith = null) => {
	const arr = [];

	for (let i = 0; i < size * size; i++) {
		const y = Math.floor(i / size);
		const x = i - size * y;
		arr.push({ x: String(x), y: String(y), fillWith: fillWith });
	}
	return arr;
};

export const fieldGameStarting = (size) => ({
	type: "SET_FIELD_STATE",
	payload: getFieldBaseState(size),
});
