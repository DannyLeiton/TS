import fs from 'fs';



export abstract class CsvFileReader<TypeOfData> { // TypeOfData, usually just called T, is a generic.
  data: TypeOfData[] = [];
  abstract mapRow(row: string[]): TypeOfData;

  read(filename: string): void {
    this.data = fs.readFileSync(filename, {
      encoding: 'utf-8'
    }).split('\n')
    .map(
      (row: string): string[] => {
      return row.split(',')
    })
    .map(this.mapRow);
  }
}