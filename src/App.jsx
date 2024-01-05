import { useState, useEffect } from "react";
import "./examples/basicExample";
import fetchPokemon from "./pokemon/pokemonFetch";
import { Monster, Team } from "./pokemon/pokemonClasses";
import TeamDisplay from "./pokemon/TeamDisplay";

function App() {
  const [pokename, setPokename] = useState("");
  const [pokeTeam, setPokeTeam] = useState(new Team());

  useEffect(() => {
    let storedTeam = localStorage.getItem("pokeTeam");

    if (storedTeam) {
      storedTeam = JSON.parse(storedTeam);
      console.log(storedTeam);
      storedTeam.teamArray = storedTeam.teamArray.map((poke) => {
        return new Monster(poke.id, poke.name, poke.sprite);
      });

      setPokeTeam(storedTeam);
    }

    console.log("New stored team: ");
    console.log(storedTeam);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newPoke = new Monster(await fetchPokemon(pokename));

    setPokeTeam(pokeTeam.addMonster(newPoke));

    localStorage.removeItem("pokeTeam");
    localStorage.setItem("pokeTeam", JSON.stringify(pokeTeam));

    setPokename("");
  };

  const handleClear = () => {
    localStorage.removeItem("pokeTeam");
    setPokeTeam(new Team());
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
        <TeamDisplay team={pokeTeam} setPokeTeam={setPokeTeam} />
      )}
      {pokeTeam.teamArray.length < 2 ? null : (
        <button onClick={() => pokeTeam.moveUp(1)}>Move Up</button>
      )}
    </div>
  );
}

export default App;
