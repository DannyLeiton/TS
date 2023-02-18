// Type annotations for functions: Code we add to tell Typescript what type of arguments a function will receive and what type of values it will return.
// Type inference for functions: Typescript tries to figure out what tyoe of value a function *will return*.

const add = (a: number, b: number)/*: number*/ => {
  return a + b;
};
console.log(add(5, 7));

// Importance of annotation in function although ts can infer it: next return type is void but should be number
const subtract = (a: number, b: number)/*: number*/ => {
  a - b;
};

// Annotations for declared, arrow and anonymous functions:
function divide(a: number, b: number): number {
  return a/b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {console.log(message)};

const throwError = (message: string): never => {throw new Error(message)}; // Never used.

const betterThrowError = (message: string): string => {
  if(!message) {
    throw new Error(message);
  }
  return message;
};

console.log(betterThrowError('Damn!'))

// Destructuring with Annotations:
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(todaysWeather);

// ES6 Syntax:
const logWeatherES6 = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
};

logWeatherES6(todaysWeather);





