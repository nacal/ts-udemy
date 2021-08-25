export { };

class MyNumberCard {
  constructor(private _owner: string, private _secretNumber: number) {
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }
}

const card = new MyNumberCard('Taro', 1010111)
// card.owner = 'Hanako'; #error
console.log(card.owner);
card.secretNumber = 1010112;
// console.log(card.secretNumber); #undifined
