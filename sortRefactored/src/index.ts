// Better implementation getting rid of "Sortable" interface, and making Sorter an abstract class extended by the child classes:
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 9, -100, -99, 5, 6, 7, 9, 15]);
console.log(`Initial: ${numbersCollection.data}`);
numbersCollection.sort();
console.log(`Sorted: ${numbersCollection.data}`);

const charsCollection = new CharactersCollection('Xaasapoasopanssbfdc');
console.log(`Initial chars: ${charsCollection.data}`);
charsCollection.sort();
console.log(`Sorted chars: ${charsCollection.data}`);

const linkedList = new LinkedList();
linkedList.add(9);
linkedList.add(4);
linkedList.add(0);
linkedList.add(-100);
linkedList.add(97);
console.log(`Initial node order:`);
linkedList.print();
linkedList.sort();
console.log(`Sorted nodes:`);
linkedList.print();