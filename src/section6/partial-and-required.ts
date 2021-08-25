export { };

interface Profile {
  name: string;
  age?: number;
};

type partialType = Partial<Profile>;
type requiredType = Required<Profile>;
