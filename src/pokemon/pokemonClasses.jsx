// Declaration
export class Monster {
  constructor(id, name, sprite) {
    this.id = id;
    this.name = name;
    this.sprite = sprite;
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
    return this;
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
