/// console.log('config check');
// Goal: CSV -> Load -> Parse -> Analyze -> Report
// We need to install the Type Definition File for the NodeJS Std Lib fs, http, os...
// npm install @types/node

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







