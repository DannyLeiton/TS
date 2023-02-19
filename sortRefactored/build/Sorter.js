"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// Change Sorter into an Abstract Class:
// -> Can't be used to create an object directly.
// -> Only used as a parent class.
// -> Can contin real implementation for some methods.
// -> The implemented methods can refer to other methods that don't actually exist yet 
//      (we still have to provide names and types for the un-implemented methods).
// -> Can make child classes promise to implement some other method.
class Sorter {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
// Differences of Interfaces vs Abstract Classes:
/* Interfaces *
 * -> Sets up a contract between different classes.
 * -> Use when we have diff objects wanted to work together
 * -> Promotes Loose Coupling
 */
/* Inheritance/Abstract Classes *
 * -> Sets up a contract between different classes.
 * -> Use when trying to build up a def of an object.
 * -> Strong couples classes together.
 */ 
