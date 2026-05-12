import type { GameInfo } from "../types/index"

interface GameCardProps {
    game: GameInfo;
}

function GameCard({ game }: GameCardProps) {
    return (
        <div className="bg-zinc-900 text-yellow-400 p-6 rounded-lg mx-auto">
            <h2 className="text-2x1 font-bold">{game.name}</h2>
            <p>{game.released_date}</p>
            <p>{game.developer}</p>
            <p>{game.description}</p>
        </div>
    )
}

export default GameCard;