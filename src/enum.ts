export { };

enum Months {
  Jan = 1,
  Feb,
  Mar,
  Apl,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec
}

console.log(Months.Jan); //1

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = "#00FF00",
}

let green = COLORS.GREEN;
console.log({ green }) //{ greem: '#00FF00" }

enum COLORS {
  BLUE = '#0000FF'
}
