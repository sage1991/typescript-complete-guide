import { MatchResult } from "../../code/MatchResult";
import { Match } from "../../model/Match";
import { Analyzer } from "../Analyzer";

class WinsAnalysis implements Analyzer<Match[]> {
  constructor(private team: string) {}

  run(matches: Match[]): string {
    let wins = 0;
    for (const match of matches) {
      if (!this.isTargetTeam(match)) continue;
      if (this.isWin(match)) wins++;
    }

    return `Team ${this.team} won ${wins} games`;
  }

  private isWin = (match: Match): boolean => (
    (match.home === this.team && match.result === MatchResult.HOME_WIN) 
    || (match.away === this.team && match.result === MatchResult.AWAY_WIN)
  );

  private isTargetTeam = (match: Match): boolean => match.home === this.team || match.away === this.team;
}

export { WinsAnalysis };