export { };

class Person {
  public name: string;
  private age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality)
  }

  profile() {
    // return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}` #error
    return `name: ${this.name}, nationality: ${this.nationality}`
  }
}

const taro = new Person('Taro', 30, 'Japan');
const taroid = new Android('Taro', 30, 'Japan');

console.log(taro.name);
// console.log(taro.age); #error
// console.log(taro.nationality); #error

console.log(taroid.name);
// console.log(taroid.age); #error
// console.log(taroid.nationality); #error
