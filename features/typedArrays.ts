// Typed Arrays: Arrays where each element is some consistent type of value.

const carMakers: string[] = ['ford', 'toyota', 'chavy'];
const dates = [new Date(), new Date()];
const carsByMake: string[][] = [];
const carsByMake1 = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

// Why do we care?
// 1. TS can do type inference when extracting values from an array.
// Help with inference when extracting values.
const car0 = carMakers[0];
const myCar = carMakers.pop();

// 2. TS can prevent us from adding incompatible values to the array.
//carMakers.push(100); // error

// 3. We can get help with 'map', 'forEach', 'reduce' functions.
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// 4. Flexible - arrays can still contain multiple different types.
const importantDates = [new Date(), '2030-12-24'];
importantDates.push('2025-12-24');
importantDates.push(new Date());

// Where to use typed arrays: Any time we need to represent a collection of records with some arbitrary sort order.
