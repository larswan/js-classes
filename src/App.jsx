import { useState, useEffect } from 'react';
import './examples/basicExample'
import fetchPokemon from './pokemon/pokemonFetch';
import {Team, Monster} from './pokemon/pokemonClasses';
import MonsterDisplay from './pokemon/MonsterDisplay';

export let pokeTeam = new Team

function App() {
  const [pokename, setPokename] = useState('')

  const handleSubmit = async e => {
    e.preventDefault();

    let newPoke = new Monster(await fetchPokemon(pokename));
    
    pokeTeam.addMonster(newPoke);
    console.log(pokeTeam.teamArray)
    setPokename('')
  }

  return (
    <div className='appContainer'>
      <h2>Pokemon Team</h2>
      <form name="pokemonForm" onSubmit={e => handleSubmit(e)}>
        <input type="text" value={pokename} onChange={e=>setPokename(e.target.value)}></input>
        <button type="submit">Add</button>
      </form>

      {/* {
        pokeTeam.teamArray.length == 0 ? null : 
        <div className="team">
          {pokeTeam.teamArray.map((poke, i)=>{
            return (<MonsterDisplay monster={poke}/>)
            }
          )}
        </div>
      }         */}
      
    </div>
  )
}

export default App
