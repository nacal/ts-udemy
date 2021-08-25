export { };

let profile1: object = { name: 'Ham' };
profile1 = { name: 12 };

let profile2: {
  name: string;
} = { name: 'Ham' };
// profile2 = { name: 12 };
profile2 = { name: 'Tom' };
