import { useState, useEffect } from "react";
import "./examples/basicExample";
import fetchPokemon from "./pokemon/pokemonFetch";
import { Monster, Team } from "./pokemon/pokemonClasses";
import TeamDisplay from "./pokemon/TeamDisplay";

export let pokeTeam = new Team();

function App() {
  const [pokename, setPokename] = useState("");

  // const [pokeTeam, setPokeTeam] = useState(new Team());

  useEffect(() => {
    let storedTeam = localStorage.getItem("pokeTeam");

    if (storedTeam) {
      storedTeam = JSON.parse(storedTeam);
      pokeTeam.teamArray = storedTeam.teamArray;
      // setPokeTeam(storedTeam);
    }

    console.log("Stored team: ");
    console.log(storedTeam);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newPoke = new Monster(await fetchPokemon(pokename));

    pokeTeam.addMonster(newPoke);

    localStorage.removeItem("pokeTeam");
    localStorage.setItem("pokeTeam", JSON.stringify(pokeTeam));

    console.log(pokeTeam.teamArray);
    setPokename("");
  };

  const handleClear = () => {
    localStorage.removeItem("pokeTeam");
    pokeTeam = new Team();
    console.log(pokeTeam);
  };

  return (
    <div className="appContainer">
      <h2>Pokemon Team</h2>
      <button onClick={handleClear}>Clear Store</button>
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
      {pokeTeam.teamArray.length < 2 ? null : (
        <button onClick={() => pokeTeam.moveUp(1)}>Move Up</button>
      )}
    </div>
  );
}

export default App;
