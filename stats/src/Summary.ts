import { MatchData } from "./utils";
import { HtmlReport } from "./reports/HtmlReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
  static winsAnalysisPerTeamWithHtmlReport(teamName: string): Summary {
    return new Summary(new WinsAnalysis(teamName), new HtmlReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAnPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}