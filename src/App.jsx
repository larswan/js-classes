import { useState, useEffect } from "react";
import "./examples/basicExample";
import fetchPokemon from "./pokemon/pokemonFetch";
import { Monster, Team } from "./pokemon/pokemonClasses";
import TeamDisplay from "./pokemon/TeamDisplay";

let pokeTeam = new Team();

function App() {
  const [pokename, setPokename] = useState("");

  useEffect(() => {
    let storedTeam = localStorage.getItem("pokeTeam");

    if (storedTeam) {
      storedTeam = JSON.parse(storedTeam);
      pokeTeam.teamArray = storedTeam;
    }

    console.log("Stored team: ");
    console.log(pokeTeam);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newPoke = new Monster(await fetchPokemon(pokename));

    pokeTeam.addMonster(newPoke);

    localStorage.setItem("pokeTeam", JSON.stringify(pokeTeam));

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

      {pokeTeam.getTeam().length === 0 ? null : (
        <TeamDisplay team={pokeTeam.getTeam()} />
      )}
    </div>
  );
}

export default App;
