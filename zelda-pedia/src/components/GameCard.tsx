import type { GameInfo } from "../types/index"

interface GameCardProps {
    game: GameInfo;
}

function GameCard({ game }: GameCardProps) {
    return (
        <div>
            <h2>{game.name}</h2>
            <p>{game.released_date}</p>
            <p>{game.developer}</p>
            <p>{game.description}</p>
        </div>
    )
}

export default GameCard;