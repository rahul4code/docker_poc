import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/getPlayers", { mode: 'cors' })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data, "This is the data")
        setPlayers(data);
      })
  }, []);

  return (
    <div className="App">
      These are the name of players
      <ul>
        {players?.players?.map((i) => {
          return <li>{i}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
