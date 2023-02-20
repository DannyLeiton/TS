/// console.log('config check');
// Goal: CSV -> Load -> Parse -> Analyze -> Report
// We need to install the Type Definition File for the NodeJS Std Lib fs, http, os...
// npm install @types/node
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
/* Issues to tackle:
--> Make a more comprehensible code for other devs:
  1. Get rid of magic strings. -> Use Enums, Collection of closely related values.
    1.1. Enum features: 1.1.1. Follow near-identical syntax rules as normal objects.
                        1.1.2. Creates an object with the same keys and values when converted from TS to JS.
                        1.1.3. Primary goal is to signal to other engineers that these are all closely related values.
                        1.1.4. Use whenever we have a small fixed set of values that are all closely related and known at compile time.
    i.e. 
    enum MatchResult {
      HomeWin = 'H',
      AwayWin = 'A',
      Draw = 'D'
    }
  2. Source of data is hardcoded: 2.1. Make a CsvFileReader.
  3. Data array is all strings, even though it might have numbers in it: 
    3.1. Inheritance Approach with Abstract Class and Generic Type ('is a' relationship between two classes): 
      3.1.1. Handle Dates, numbers, strings and MatchResult types => Create MatchData type (tuple) with the corresponding handlers in CsvFileReader.ts
      3.1.2. Refactor CsvFileReader to make it reusable.
      3.1.3. Use Generics: 3.1.3.1. Like function arguments, but for types in class/function definitions.
                           3.1.3.2. Allows us to define the type of a property/argument/return value at a future point.
                           3.1.3.3. Used heavily when writing reusable code.
    3.2. Interface-Based Approach (Composition): 3.2.1. Make DataReader Interface. ('has a' relationship between two classes).
    - Design Patterns Elements od Reusable Object-Oriented software (Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides), pg 20: 
      --> "Favor Object Composition over Class Inheritance." Second Pronciple of Object-Orirnted Design.
    - Composition: Follow Delegation. Compositon != Multiple Inheritance.
  4. Variable name after specific team.
  5. Analysis type is fixed.
  6. No ability to output the report in diff formats.
    Let's solve all three last issues (4,5,6) with object composition...  
*/

import { MatchReader } from "./MatchReader";
//import { CsvFileReader } from "./CsvFileReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { RefereeAnalysis } from "./analyzers/RefereeAnalysis";
import { ConsoleReport } from "./reports/ConsoleReport";
import { HtmlReport } from "./reports/HtmlReport";

// Create an object that satisfies the 'DataReader' interface
const filename = 'football.csv';
//const csvFileReader = new CsvFileReader(filename);
// Create an instance of MatchReader and pass in something satisfying the `DataReader` interface.
// const matchReader = new MatchReader(csvFileReader);

const matchReader =  MatchReader.fromCsv(filename); // Now using a static method with the compose MatchReader
matchReader.load();
let matches = matchReader.matches;

//const dateOfFirstMatch = matches[0][0]; // TS recognizes this variable as Date type if you hover it.
// console report
let teamName = 'Tottenham';
const winsAnalysis = new WinsAnalysis(teamName);
const consoleReport =  new ConsoleReport();
const summaryConsoleReport = new Summary(winsAnalysis, consoleReport);
summaryConsoleReport.buildAndPrintReport(matches);
// html report
const summaryHtmlReport = new Summary(winsAnalysis, new HtmlReport());
summaryHtmlReport.buildAndPrintReport(matches);
// Will overwrite the report.html file
let otherTeamName =  "Chelsea";
const staticSummary = Summary.winsAnalysisPerTeamWithHtmlReport(otherTeamName);
staticSummary.buildAndPrintReport(matches);
// referee whistles console report
let refereeName = 'M Oliver';
const refereeAnalysis = new RefereeAnalysis(refereeName);
const summaryConsoleRefereeReport = new Summary(refereeAnalysis, consoleReport);
summaryConsoleRefereeReport.buildAndPrintReport(matches);










