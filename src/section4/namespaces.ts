export { };

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) { }
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) { }
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) { }
  }
}

const me = new Japanese.Tokyo.Person("Taro");
console.log(me);

const me2 = new Japanese.Osaka.Person("Taro");
console.log(me2);

const you = new English.Person("Michael", "Joseph", "Jackson");
console.log(you);
