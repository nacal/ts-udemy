export { };

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = {
  name: 'Taro',
  underTwenty: false
};

profile.name = 'Taro';
profile.age = 21;
