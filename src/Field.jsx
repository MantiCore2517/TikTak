import { FieldLayout } from "./layout/FieldLayout";

const getCoordinates = (size) => {
	const arr = [];

	for (let i = 0; i < size * size; i++) {
		const y = Math.floor(i / size);
		const x = i - size * y;
		arr.push({ x: x, y: y });
	}
	return arr;
};

export const Field = () => {
	const size = 3;
	const props = {
		size: size,
		coordinates: getCoordinates(size),
	};
	return <FieldLayout {...props} />;
};
