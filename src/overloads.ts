export { };

function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  return (typeof value === 'number') ? value * 2 : value + value
}

console.log(double(10))
console.log(double('aa'))


interface Double {
  (value: number): number;
  (value: string): string;
}

const double2: Double = (value: any): any => {
  return (typeof value === 'number') ? value * 2 : value + value
}

console.log(double2(10))
console.log(double2('aa'))
