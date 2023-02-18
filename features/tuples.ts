// Tuple: Array-like structure where each element represents some property of a record.
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

type Drink = [string, boolean, number];

const pepsi: [string, boolean, number] = ['brown', true, 40];
// pepsi[0] = 4 //error.

const sprite: Drink = ['clear', true, 40];

const tea: Drink = ['brown', false, 0];

// Why Tuples:
// Type alias, csv files could work.

const carSpecs: [number, number] = [200, 3354];

// Objects are better than tuples to know what we are talking about.
const carStats = {
  horsePower: 400,
  weight: 3354
};

