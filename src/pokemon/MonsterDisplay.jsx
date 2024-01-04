// this works for getting my nice big class instance without using props
// import { pokeTeam } from "../App"
import PropTypes from "prop-types";

const MonsterDisplay = ({ monster }) => {
  return (
    <div className="monster">
      <img src={monster.sprite} />
      <h3>
        #{monster.id} {monster.name}
      </h3>
    </div>
  );
};

export default MonsterDisplay;

MonsterDisplay.propTypes = {
  monster: PropTypes.object.isRequired,
};
