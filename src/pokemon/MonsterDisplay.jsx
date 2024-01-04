// this works for getting my nice big class instance without using props
// import { pokeTeam } from "../App"
import PropTypes from "prop-types";
import { pokeTeam } from "../App";

const MonsterDisplay = ({ monster, index }) => {
  return (
    <div className="monster">
      <img src={monster.sprite} />
      <h3>
        #{monster.id} {monster.name}
      </h3>
      <button onClick={pokeTeam.moveUp(index)}>UP</button>
      <button onClick={pokeTeam.moveDown(index)}>DOWN</button>
    </div>
  );
};

export default MonsterDisplay;

MonsterDisplay.propTypes = {
  monster: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
