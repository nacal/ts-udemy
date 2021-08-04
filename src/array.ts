export { };

let numbers: number[] = [1, 2, 3];
let strings: string[] = ['a', 'b', 'c']
console.log({ numbers }, { strings });

//非推奨
let numbers2: Array<number> = [1, 2, 3];
let strings2: Array<string> = ['a', 'b', 'c']
console.log({ numbers2 }, { strings2 });


let nijigen: number[][] = [
  [50, 100],
  [150, 300]
];
console.log({ nijigen });

let array: (string | number | boolean)[] = [1, false, 'Japan'];
console.log({ array });
