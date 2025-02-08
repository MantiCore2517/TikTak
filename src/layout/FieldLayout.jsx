const cell = (size) => {
	const arr = [];

	for (let i = 0; i < size * size; i++) {
		const y = Math.floor(i / size);
		const x = i - size * y;
		arr.push({ x: x, y: y });
	}
	return arr;
};

export const FieldLayout = () => {
	const size = 3;
	const arr = cell(size);

	return (
		<>
			<ul
				style={{
					display: "grid",
					gridTemplateRows: `repeat(${size}, minmax(0, 1fr))`,
					gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
				}}
				className="place-items-center gap-1 mt-10 bg-radial from-gray-200 to-gray-200/0"
			>
				{arr.map((el) => (
					<li
						className="grid relative w-30 h-30 bg-[#3a3939]"
						key={Math.random().toString(16).slice(2)}
						data-posx={el.x}
						data-posy={el.y}
					>
						<div className="absolute w-30 h-1.5 rotate-45 bg-gray-300 place-self-center rounded-full"></div>
						<div className="absolute w-30 h-1.5 rotate-135 bg-gray-300 place-self-center rounded-full"></div>
					</li>
				))}
			</ul>
		</>
	);
};

// FieldLayout.propTypes = {
// 	rows: String.isRequired,
// 	cols: String.isRequired,
// };
