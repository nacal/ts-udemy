export { };

interface Profile {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Taro',
  age: 20
}

me.age++;


type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Jiro',
  age: 22
}

// friend.age++; #error
