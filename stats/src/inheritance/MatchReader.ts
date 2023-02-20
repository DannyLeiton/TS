import { CsvFileReader } from "./CsvFileReader";
import { MatchData, dateStringToDate, MatchResult } from "../utils";

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
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
}