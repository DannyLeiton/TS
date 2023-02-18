console.log(1+2+3+4);

const logSomething = () => {
  console.log("Something");
}

logSomething();

// Writing the sorting algorithm:
// Bubble Sort for a number array: "swaping!"
// The final implementation should work for number arrays, word strings, and linked lists.
// strings in JS are inmutable.
// "X" >  "a" => false. using "a".charCodeAt(0) => 97, using "X".charCodeAt(0) => 88
// TS is really smart: points only shared methods for number[] | string. And shows error messages.
// type guards: 

class ArrayNumberSorter {
  constructor(public collection: number[]) {}

  sort(): void {
    const { length } = this.collection; 
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // This will only work for number[]
        if (this.collection[j] > this.collection[j+1]) {
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j+1];
          this.collection[j+1] = leftHand;
        }
      }
    }
  }
}

const arrayNumberSorter = new ArrayNumberSorter([10, 3, -5, 0, 9, -100, -99, 5, 6, 7, 9, 15]);
console.log(`Initial number array: ${arrayNumberSorter.collection}`);
arrayNumberSorter.sort();
console.log(`Sorted number array: ${arrayNumberSorter.collection}`);

/* Bad Approach, does not allow to add support 
class BadNumArrayStringSorter {
  constructor(public collection: number[] | string | LinkedList) {} // Too many Unions, it's better to use interfaces.

  sort(): void {
    const { length } = this.collection; 
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection instanceof LinkedList) {}

        // Using a Type Guard for object types:
        if (this.collection instanceof Array) {
          // collection === number[]
          if (this.collection[j] > this.collection[j+1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j+1];
            this.collection[j+1] = leftHand;
          }
        }
        // Other typeguard for symbol, string, boolean and number.
        if(typeof this.collection === 'string'){
          
        }
      }
    }
  }
}

const badNumArrayStringsorter = new BadNumArrayStringSorter("Xaaa");
console.log(`Initial number array or string: ${badNumArrayStringsorter.collection}`);
badNumArrayStringsorter.sort();
console.log(`Sorted number array or string: ${badNumArrayStringsorter.collection}`);
*/

// Better implementation:

import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 9, -100, -99, 5, 6, 7, 9, 15]);
const sorter = new Sorter(numbersCollection);
console.log(`Initial: ${numbersCollection.data}`);
sorter.sort();
console.log(`Sorted: ${numbersCollection.data}`);

const charsCollection = new CharactersCollection('Xaasapoasopanssbfdc');
const charSorter = new Sorter(charsCollection);
console.log(`Initial chars: ${charsCollection.data}`);
charSorter.sort();
console.log(`Sorted chars: ${charsCollection.data}`);

const linkedList = new LinkedList();
linkedList.add(9);
linkedList.add(4);
linkedList.add(0);
linkedList.add(-100);
linkedList.add(97);
const linkedListSorter = new Sorter(linkedList);
console.log(`Initial node order:`)
linkedList.print();
linkedListSorter.sort();
console.log(`Sorted nodes:`)
linkedList.print();

// Better implementation:

