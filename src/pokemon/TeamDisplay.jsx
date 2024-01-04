import PropTypes from "prop-types";
import MonsterDisplay from "./MonsterDisplay";

const TeamDisplay = ({ team }) => {
  return (
    <div className="team">
      {team.map((poke, i) => {
        return <MonsterDisplay monster={poke} key={i} />;
      })}
    </div>
  );
};

TeamDisplay.propTypes = {
  team: PropTypes.arrayOf(PropTypes.object),
};

export default TeamDisplay;
