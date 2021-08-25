export { };

class Animal {
  constructor(public name: string) { }
  run(): string {
    return 'I can run';
  }
}

class Lion extends Animal {
  constructor(name: string, public speed: number) {
    super(name);
  }
  run(): string {
    return `${super.run()} ${this.speed}km/h`
  }
}

const lion = new Lion('Taro', 80);
console.log(lion.run());
