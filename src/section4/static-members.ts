export { };

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Hikaru';
  static lastName: string = 'Nakata';

  static work() {
    return `Hello World. This is ${this.firstName}.`;
  }
}

// const me = new Me();
// console.log(me.isProgrammer); #error
console.log(Me.isProgrammer);
console.log(Me.work());
