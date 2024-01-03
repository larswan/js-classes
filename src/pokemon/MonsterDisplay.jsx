import { pokeTeam } from "../App"

const MonsterDisplay = ({monster}) => {

    console.log(pokeTeam)

    return(
        <div className="monster">
            <img src={monster.sprite}/>
            <h3>#{monster.id} {monster.name}</h3>
        </div>
    )
}

export default MonsterDisplay