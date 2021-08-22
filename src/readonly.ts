export { };

class VisaCard {
  constructor(readonly owner: string) { }
}

const myCard = new VisaCard('Taro');
console.log(myCard.owner);
// myCard.owner = 'Hanako'; #error
