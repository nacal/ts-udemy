export { };

type Original = string;

const fooString: string = 'Hello';
const barString: Original = 'Hello';


type Profile = {
  name: string
  age: number
}

const example1: Profile = {
  name: 'Ham',
  age: 24
};

type Profile2 = typeof example1;
