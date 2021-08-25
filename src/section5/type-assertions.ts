export { };

const name: any = 'Taro';

let lenght1 = name.length as number;
let lenght2 = (name as string).length;
let lenght3 = (<string>name).length;
