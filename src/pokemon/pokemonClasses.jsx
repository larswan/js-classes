// Declaration
export class Monster {
  constructor(response) {
    this.id = response.id;
    this.name = response.name;
    this.sprite = response.sprites.front_default;
  }
}

export class Team {
  constructor() {
    this.maxSize = 6;
    this.teamArray = [];
  }

  addMonster(monster) {
    if (this.teamArray.length >= this.maxSize) {
      this.teamArray.pop();
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

// export let pokeTeam = new Team();
// pokeTeam.teamArray = [
//   {
//     id: 1,
//     name: "ditto",
//     sprite:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
//   },
//   {
//     id: 112,
//     name: "ditto",
//     sprite:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
//   },
// ];
