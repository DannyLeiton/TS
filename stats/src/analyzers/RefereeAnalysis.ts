import { Analyzer } from "../Summary";
import { MatchData } from "../utils";

export class RefereeAnalysis implements Analyzer {
  constructor(public refereeName: string) {}

  run(matches: MatchData[]): string {
    let whistles = 0;

    for (let match of matches) {
      if (match[6] === this.refereeName) {
        whistles++;
      }
    }

    return `Referee ${this.refereeName} whistled ${whistles} games`;
  }

}