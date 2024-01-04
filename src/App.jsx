import { useState, useEffect } from "react";
import "./examples/basicExample";
import fetchPokemon from "./pokemon/pokemonFetch";
import { Monster } from "./pokemon/pokemonClasses";
import { pokeTeam } from "./pokemon/pokemonClasses";
import TeamDisplay from "./pokemon/TeamDisplay";

function App() {
  const [pokename, setPokename] = useState("");

  // get old team on page refresh
  useEffect(() => {
    let storedTeam = localStorage.getItem("pokeTeam");

    if (storedTeam) {
      pokeTeam.teamArray = JSON.parse(storedTeam);
    }
    console.log("Memory: ");
    console.log(pokeTeam);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newPoke = new Monster(await fetchPokemon(pokename));

    pokeTeam.addMonster(newPoke);

    localStorage.setItem("pokeTeam", JSON.stringify(pokeTeam.getTeam()));

    console.log(pokeTeam.teamArray);
    setPokename("");
  };

  return (
    <div className="appContainer">
      <h2>Pokemon Team</h2>
      <form name="pokemonForm" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={pokename}
          onChange={(e) => setPokename(e.target.value)}
        ></input>
        <button type="submit">Add</button>
      </form>

      {pokeTeam.teamArray.length === 0 ? null : (
        <TeamDisplay team={pokeTeam.teamArray} />
      )}
    </div>
  );
}

export default App;
