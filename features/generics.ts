class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

let stringArray = new ArrayOfAnything(['x', 'y', 'z']);

console.log(stringArray.get(2));

// Generics with Functions:

function printAnything<T>(arr: T[]): void{
  arr.forEach(e => console.info(e));
}

printAnything<string>(['x', 'y', 'z']);

// Generics Constraints:

class Carro {
  print() {
    console.log('I am a car')
  }
}

class House {
  print() {
    console.log('I am a house')
  }
}

/*function printHousesOrCarros<T>(arr: T[]): void {
  arr.forEach(hoc => {hoc.print()}) // Error because there's no guarantee T has a print method.
}*/

//printHousesOrCarros([1,2,3,4]); // i.e. number primitive does not have it.

// So we need to add a Printable interface. No errors at all.

interface Printable {
  print(): void;
}

function printPrintableHousesOrCarros<T extends Printable>(arr: T[]): void {
  arr.forEach(hoc => {hoc.print()}) // Error because there's no guarantee T has a print method.
}

//printPrintableHousesOrCarros([1,2,3,4]); // We now we see the error on the function usage side.

printPrintableHousesOrCarros<House>([new House(), new House()]);

printPrintableHousesOrCarros([new Carro(), new House()]); // This sould work.


