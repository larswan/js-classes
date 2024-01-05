// this works for getting my nice big class instance without using props
// import { pokeTeam } from "../App"
import PropTypes from "prop-types";
import { Monster, Team } from "./pokemonClasses";

const MonsterDisplay = ({ monster, team, index, setPokeTeam }) => {
  const shiftUp = () => {
    setPokeTeam(team.moveUp(index));
  };

  return (
    <div className="monster">
      <img src={monster.sprite} />
      <h3>
        #{monster.id} {monster.name}
      </h3>
      <button onClick={shiftUp}>UP {index}</button>
      <button>DOWN</button>
    </div>
  );
};

export default MonsterDisplay;

MonsterDisplay.propTypes = {
  monster: PropTypes.instanceOf(Monster).isRequired,
  index: PropTypes.number.isRequired,
  team: PropTypes.instanceOf(Team).isRequired,
  setPokeTeam: PropTypes.func.isRequired,
};
