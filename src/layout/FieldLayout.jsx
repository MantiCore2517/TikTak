/* eslint-disable react/prop-types */
import { Cross } from "../Cross";
import { Zero } from "../Zero";

export const FieldLayout = ({ hidden, size, currentFieldState, makeMove }) => {
	return (
		<>
			<ul
				hidden={hidden}
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
						{el.fillWith === "cross" && <Cross />}
						{el.fillWith === "zero" && <Zero />}
					</li>
				))}
			</ul>
		</>
	);
};
