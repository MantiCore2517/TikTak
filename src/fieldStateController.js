export const updateFieldState = (field, x, y, fillWith) => {
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


const getConditionsArr = (size) => {
	const trueSize = size - 1;
	const arr = [];
	arr.push((a, b) => a === b);
	arr.push((a, b) => a === trueSize - b);
	for (let i = 0; i < size; i++) {
		arr.push((a, b) => a === i);
	}
	for (let i = 0; i < size; i++) {
		arr.push((a, b) => b === i);
	}
	return arr
};

export const checkEndGameCondition = (field, size, setGameState) =>{
	const currentState = field
	const conditions = getConditionsArr(size)
	const winState = new Array((size*2) + 2).fill(0)
	const firstWinState = [...winState];
	const secondWinState = [...winState];
	let fillLessCount = 0;


	currentState.forEach((el,i) => {
		if (el.fillWith === "cross") {

			conditions.forEach((num, i) => {
				const r = num(Number(el.x), Number(el.y));
				r && firstWinState[i]++;

			});
		} else if(el.fillWith === "zero"){
			conditions.forEach((num, i) => {
				const r = num(Number(el.x), Number(el.y));
				r && secondWinState[i]++;

			});
		} else {
			fillLessCount++;

		}
	});
	let isFullFilled = false
	fillLessCount === 0 && currentState.length >0 && (isFullFilled = true)


	const isFirstPlayerWin = firstWinState.some((num) => num === size);
	const isSecondPlayerWin = secondWinState.some((num) => num === size);
	isFirstPlayerWin && setGameState("end_player_1_win")
	isSecondPlayerWin && setGameState("end_player_2_win")

	isFullFilled && !isFirstPlayerWin && !isSecondPlayerWin && setGameState("draw")

}

const getFieldBaseState = (size, fillWith = null) => {
	const arr = [];

	for (let i = 0; i < size * size; i++) {
		const y = Math.floor(i / size);
		const x = i - size * y;
		arr.push({ x: String(x), y: String(y), fillWith: fillWith });
	}
	return arr;
};

export const fieldState = (size, setField) => {
	return { start: [], game: setField(getFieldBaseState(size))};
};
