"use strict";
/// console.log('config check');
// Goal: CSV -> Load -> Parse -> Analyze -> Report
// We need to install the Type Definition File for the NodeJS Std Lib fs, http, os...
// npm install @types/node
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* First fast implementation:
import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
  encoding: 'utf-8'
}).split('\n')
.map((row: string): string[] => {
  return row.split(',')
});

console.table(matches);

let manUnitedWins = 0;

for (let match of matches) {
  if ((match[1] === 'Man United' && match[5] === 'H') || (match[2] === 'Man United' && match[5] === 'A')) {
    manUnitedWins++;
  }
}

console.info(`Man United won: ${manUnitedWins} games`);
*/
/* Problems to tackle:
--> Make a more comprehensible code:
  1. Get rid of magic strings. -> Use Enums, Collection of closely related values.
    1.1. Enum features: 1.1.1. Follow near-identical syntax rules as normal objects.
                        1.1.2. Creates an object with the same keys and values when converted from TS to JS.
                        1.1.3. Primary goal is to signal to other engineers that these are all closely related values.
                        1.1.4. Use whenever we have a small fixed set of values that are all closely related and known at compile time.
*/
const fs_1 = __importDefault(require("fs"));
const matches = fs_1.default.readFileSync('football.csv', {
    encoding: 'utf-8'
}).split('\n')
    .map((row) => {
    return row.split(',');
});
console.table(matches);
let manUnitedWins = 0;
for (let match of matches) {
    if ((match[1] === 'Man United' && match[5] === 'H') || (match[2] === 'Man United' && match[5] === 'A')) {
        manUnitedWins++;
    }
}
console.info(`Man United won: ${manUnitedWins} games`);
