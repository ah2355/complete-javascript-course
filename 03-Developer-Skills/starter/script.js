// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = 23;

if (x == 23) console.log(23);

const calcAge = (birthYear) => 2023 - birthYear;

console.log(calcAge(2004));

console.log("My name is Afif");

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmp = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  return max - min;
};

const amp = calcTempAmp(temperatures);
console.log(amp);
//Problem 2 two arrays need to be passed on
const calcTempAmpNew = function (temp1, temp2) {
  //array1.concat(array2) - Mergees two arrays or more
  const temps = temp1.concat(temp2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  return max - min;
};

const ampNew = calcTempAmpNew(temperatures, [3, 5, 1, 4, 3, -5, 1 - 3, 14, 18]);
console.log(ampNew);

const measureKelvin = function () {
  const measure = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degrees celsius: ")),
  };

  console.table(measure);
  //   console.log(measure);
  //   console.log(measure.value);

  const kelvin = measure.value + 273;
  return kelvin;
};
console.log(measureKelvin());
