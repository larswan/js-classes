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
      console.log(this.teamArray);
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
