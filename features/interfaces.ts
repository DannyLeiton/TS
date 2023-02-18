// Interfaces: Create a new type, describing the property names and value types of an object.
// Interfaces + Classes = How we get really strong code reuse in TS.

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
};
// Too Long annotation...
const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
  console.log(`Name ${vehicle.name}`);
  console.log(`Year ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};

printVehicle(oldCivic);

// Improvement with interface:
// Generic name
interface VehicleInt {
  name: string;
  year: number;
  broken: boolean;

}

const printVehicleInt = (vehicle: VehicleInt): void => {
  console.log(`Name ${vehicle.name}`);
  console.log(`Year ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};

printVehicleInt(oldCivic);

interface newVehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string; 
}

const printVehicleSummary = (vehicle: newVehicle): void => {
  console.log(`This is a summary: ${vehicle.summary()}`);
};

const newCivic = { // Must satisfy the "Reportable" interface to work with "printSummary"
  name: 'civic',
  year: 2023,
  broken: false,
  summary(): string {
    return `This car is a: ${this.name}`;
  }
};

printVehicleSummary(newCivic);

const thisDrink = { // Must satisfy the "Reportable" interface to work with "printSummary"
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `This drink has ${this.sugar} grams of sugar`;
  }
};

interface Reportable {      // Gatekeeper to printSummary.
  summary(): string;
}

const printSummary = (item: Reportable): void => {
  console.log(`This is a summary report: ${item.summary()}`);
};

printSummary(newCivic)
printSummary(thisDrink)

// General Strategy for Reusable Code in TS => 1. Create functions that accept arguments that are typed with interfaces.
//                                             2. Objects/Classes can decide to 'implement' a given interface to work with a function.

