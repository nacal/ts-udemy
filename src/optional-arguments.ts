export { };

const bmi = (height: number, weight: number, printable?: boolean): number => {
  const bmi = weight / (height * height);
  if (printable) console.log(`bmi ${bmi}`)
  return bmi
}

bmi(1.68, 72, true)
