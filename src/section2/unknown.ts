export { };

const test = (): number => {
  return 43;
}

let numberAny: any = test();
let numberUnknown: unknown = test();

let sumAny = numberAny + 10;
// let sumUnknown = numberUnknown + 10;
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}
