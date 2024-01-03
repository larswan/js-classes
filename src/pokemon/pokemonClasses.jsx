import React, { Component } from 'react';
import MonsterDisplay from './MonsterDisplay';

// Declaration
export class Monster {
    constructor(response) {
        this.id = response.id
        this.name = response.name
        this.sprite = response.sprites.front_default
    }
}

export class Team {
    constructor() {
        this.maxSize = 6;
        this.teamArray = [];
    }

    addMonster(monster) {
        if (this.teamArray.length >= this.maxSize) {
            this.teamArray.pop()
        }
        this.teamArray.unshift(monster);
    }

    moveUp(index) {
        if (index > 0 && index < this.teamArray.length) {
            const temp = this.teamArray[index];
            this.teamArray[index] = this.teamArray[index - 1];
            this.teamArray[index - 1] = temp;
        }
    }

    moveDown(index) {
        if (index >= 0 && index < this.teamArray.length - 1) {
            const temp = this.teamArray[index];
            this.teamArray[index] = this.teamArray[index + 1];
            this.teamArray[index + 1] = temp;
        }
    }

    getTeam() {
        return this.teamArray;
    }
}


// class Team extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             teamArray: [],
//         };
//     }

//     addMonster = (monster) => {
//         const { teamArray } = this.state;

//         if (teamArray.length >= 6) {
//             // Remove the last element if the team is at maximum size
//             teamArray.pop();
//         }

//         this.setState((prevState) => ({
//             teamArray: [monster, ...prevState.teamArray],
//         }));
//     };

//     moveUp = (index) => {
//         if (index > 0 && index < this.state.teamArray.length) {
//             this.setState((prevState) => {
//                 const updatedTeam = [...prevState.teamArray];
//                 const temp = updatedTeam[index];
//                 updatedTeam[index] = updatedTeam[index - 1];
//                 updatedTeam[index - 1] = temp;
//                 return { teamArray: updatedTeam };
//             });
//         }
//     };

//     moveDown = (index) => {
//         if (index >= 0 && index < this.state.teamArray.length - 1) {
//             this.setState((prevState) => {
//                 const updatedTeam = [...prevState.teamArray];
//                 const temp = updatedTeam[index];
//                 updatedTeam[index] = updatedTeam[index + 1];
//                 updatedTeam[index + 1] = temp;
//                 return { teamArray: updatedTeam };
//             });
//         }
//     };

//     render() {
//         const { teamArray } = this.state;

//         return (
//             <div className="team">
//                 {teamArray.map((item, i) => (
//                     <MonsterDisplay key={i} monster={item} />
//                 ))}
//             </div>
//         );
//     }
// }

// export default Team;