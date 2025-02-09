/* eslint-disable react/prop-types */
export const FieldLayout = ({ size, currentFieldState, makeMove, cross, zero }) => {
	return (
		<>
			<ul
				style={{
					display: "grid",
					gridTemplateRows: `repeat(${size}, minmax(0, 1fr))`,
					gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
				}}
				className="place-items-center gap-2 mt-5 bg-radial from-gray-200 to-gray-200/0"
			>
				{currentFieldState.map((el) => (
					<li
						className="grid relative w-30 h-30 bg-[#3a3939]"
						key={Math.random().toString(16).slice(2)}
						onClick={makeMove}
						data-posx={el.x}
						data-posy={el.y}
						data-state={el.fillWith}
					>
						{el.fillWith === "cross" && cross}
						{el.fillWith === "zero" && zero}
					</li>
				))}
			</ul>
		</>
	);
};
