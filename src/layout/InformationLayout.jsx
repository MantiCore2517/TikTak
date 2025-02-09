/* eslint-disable react/prop-types */
export const InformationLayout = ({ gameStatus, cross, zero, turn, onPlay }) => {
	return (
		<>
			{gameStatus === "start" && (
				<div className="grid w-30 h-30 m-auto">
					<button
						className="w-20 h-10 rounded-md bg-orange-200 inset-ring-2
			 inset-ring-[#3a3939] text-2xl justify-self-center self-end
			 text-[#3a3939] font-bold text-center animate-pulse"
						onClick={onPlay}
					>
						Play
					</button>
				</div>
			)}
			{gameStatus === "game" && (
				<div className="grid w-30 h-30 m-auto ">
					{turn === "player_1" && cross}
					{turn === "player_2" && zero}
				</div>
			)}
			{gameStatus === "end_player_1_win" && (
				<div className="grid w-30 h-30 m-auto ">{cross}</div>
			)}
			{gameStatus === "end_player_2_win" && (
				<div className="grid w-30 h-30 m-auto ">{zero}</div>
			)}
			{gameStatus === "draw" && (
				<div className="grid w-30 h-30 m-auto ">
					{zero}
					{cross}

					<div
						className="absolute w-30 h-10  bg-orange-300 text-orange-800 place-self-center
					rounded-full text-center place-content-center text-xl font-bold inset-ring-2
			 inset-ring-[#3a393977]"
					>
						DRAW!
					</div>
					<div
						className="absolute w-30 h-10  bg-orange-300/50 text-orange-800/50 place-self-center
					rounded-full text-center place-content-center text-xl font-bold inset-ring-2
			 inset-ring-[#3a393983] animate-ping"
					>
						DRAW!
					</div>
				</div>
			)}
		</>
	);
};
