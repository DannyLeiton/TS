import { dateStringToDate, MatchResult, MatchData } from './utils';
import { CsvFileReader } from './CsvFileReader';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  matches: MatchData[] = [];
  
  constructor(public reader: DataReader) {} // This syntax automatically creates the public attribute "reader".

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => { // : (Date | string | number | MatchResult)[] => {}
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult, // Type Assertion: overwrite TS default behaviour.
          row[6]
        ];
      }
    );
  }
}