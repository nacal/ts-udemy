export { };

class Person {
  constructor(public name: string, protected age: number) { }
}

const taro = new Person('Taro', 30);
console.log(taro);
