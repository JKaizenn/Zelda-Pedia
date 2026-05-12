import { useEffect, useState } from "react";
import type { GameInfo } from "./types/index";
import GameCard from "./components/GameCard";

function App() {
  const [games, setGames] = useState<GameInfo[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/games")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGames(data.data);
      });
  }, []);

  return (
    <div>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default App;
