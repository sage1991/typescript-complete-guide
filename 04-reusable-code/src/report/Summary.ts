import { HtmlWriter } from "../io/impl/HtmlWriter";
import { Writer } from "../io/Writer";
import { Match } from "../model/Match";
import { Analyzer } from "./Analyzer";
import { WinsAnalysis } from "./impl/WinsAnalysis";


class Summary {
  constructor(private analyzer: Analyzer<Match[]>, private writer: Writer) {}

  static withWinsAnalysis(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlWriter());
  }

  summarize(matches: Match[]): void {
    const report = this.analyzer.run(matches);
    this.writer.write(report);
  }
}


export { Summary };