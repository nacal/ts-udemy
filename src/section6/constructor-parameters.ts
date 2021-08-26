export { };

class Person {
  constructor(public name: string, public age: number) { }
}

const taro = new Person('Taro', 20)

type PersonType = typeof Person;
type Profile = ConstructorParameters<PersonType>;

const jiro: Profile = ['Jiro', 22];
