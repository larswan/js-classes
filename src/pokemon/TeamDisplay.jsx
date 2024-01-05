import PropTypes from "prop-types";
import MonsterDisplay from "./MonsterDisplay";
import { Team } from "./pokemonClasses";

const TeamDisplay = ({ team, setPokeTeam }) => {
  return (
    <div className="team">
      {team.teamArray.map((poke, i) => {
        return (
          <MonsterDisplay
            monster={poke}
            key={i}
            index={i}
            team={team}
            setPokeTeam={setPokeTeam}
          />
        );
      })}
    </div>
  );
};

TeamDisplay.propTypes = {
  team: PropTypes.instanceOf(Team).isRequired,
  setPokeTeam: PropTypes.func.isRequired,
};

export default TeamDisplay;
