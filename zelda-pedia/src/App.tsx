import { useEffect, useState } from "react";

interface Game {
  id: string;
  name: string;
  description: string;
  developer: string;
  publisher: string;
  released_date: string;
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

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
        <h2 key={game.id}>{game.name}</h2>
      ))}
    </div>
  );
}

export default App;
