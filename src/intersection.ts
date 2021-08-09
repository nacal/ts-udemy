export { };

interface Pitcher1 {
  throwingSpeed: number;
};

interface Batter1 {
  battingAverage: number;
};

type TwoWayPlayer = Pitcher1 & Batter1;

const sasaki: Pitcher1 = {
  throwingSpeed: 154
};

const ochiai: Batter1 = {
  battingAverage: 0.367
}

const ohtani: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286
}
