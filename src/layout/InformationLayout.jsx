/* eslint-disable react/prop-types */
export const InformationLayout = ({
	gameState,
	cross,
	zero,
	turn,
	onPlay,
	onRefresh,
}) => {
	return (
		<>
			{gameState === "start" && (
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
			{(gameState === "gameStarting" || gameState === "game") && (
				<div className="grid grid-cols-3 w-auto h-30 m-auto">
					<div className="grid col-start-2 w-30 h-30 place-self-center animate-bounce">
						{turn === "player_1" && cross}
						{turn === "player_2" && zero}
					</div>
					{gameState === "game" && (
						<button
							className="flex place-self-end w-15 h-6 bg-gray-300
					place-content-center text-[#3a3939] font-bold rounded-md p-0"
							onClick={onRefresh}
						>
							refresh
						</button>
					)}
				</div>
			)}
			{gameState === "end_player_1_win" && (
				<div className="grid grid-cols-3 w-auto h-30 m-auto ">
					{cross}
					<div
						className="absolute col-start-2 w-30 h-10  bg-orange-300 text-orange-800 place-self-center
			rounded-full text-center place-content-center text-xl font-bold inset-ring-2
	 inset-ring-[#3a393977]"
					>
						WIN!
					</div>
					<div
						className="absolute col-start-2 w-30 h-10  bg-orange-300/50 text-orange-800/50 place-self-center
			rounded-full text-center place-content-center text-xl font-bold inset-ring-2
	 inset-ring-[#3a393983] animate-ping"
					>
						WIN!
					</div>
					<button
						className="flex col-start-3 place-self-end w-15 h-6 bg-gray-300
					place-content-center text-[#3a3939] font-bold rounded-md p-0"
						onClick={onRefresh}
					>
						refresh
					</button>
				</div>
			)}
			{gameState === "end_player_2_win" && (
				<div className="grid grid-cols-3 w-auto h-30 m-auto ">
					{zero}
					<div
						className="absolute w-30 h-10  bg-orange-300 text-orange-800 place-self-center
			rounded-full text-center place-content-center text-xl font-bold inset-ring-2
	 inset-ring-[#3a393977]"
					>
						WIN!
					</div>
					<div
						className="absolute w-30 h-10  bg-orange-300/50 text-orange-800/50 place-self-center
			rounded-full text-center place-content-center text-xl font-bold inset-ring-2
	 inset-ring-[#3a393983] animate-ping"
					>
						WIN!
					</div>
					<button
						className="flex col-start-3 place-self-end w-15 h-6 bg-gray-300
					place-content-center text-[#3a3939] font-bold rounded-md p-0"
						onClick={onRefresh}
					>
						refresh
					</button>
				</div>
			)}
			{gameState === "draw" && (
				<div className="grid grid-cols-3 w-auto h-30 m-auto ">
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
					<button
						className="flex col-start-3 place-self-end w-15 h-6 bg-gray-300
					place-content-center text-[#3a3939] font-bold rounded-md p-0"
						onClick={onRefresh}
					>
						refresh
					</button>
				</div>
			)}
		</>
	);
};
