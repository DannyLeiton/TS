import { MatchReader } from "./MatchReader";
import { MatchResult } from "../utils";

const matchFileReader = new MatchReader();
matchFileReader.read('football.csv');
const matches = matchFileReader.data;

// const dateOfFirstMatch = matches[0][0]; // TS recognizes it as Date type.

let manUnitedWins = 0;

for (let match of matches) {
  if ((match[1] === 'Man United' && match[5] === MatchResult.HomeWin) || (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)) {
    manUnitedWins++;
  }
}

console.log(`Man United won: ${manUnitedWins} games`);







