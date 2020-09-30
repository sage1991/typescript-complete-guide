import { MatchResult } from "../code/MatchResult";

// export type Match = [ Date, string, string, number, number, MatchResult, string ];

class Match {
  date: Date;
  home: string;
  away: string;
  homeScore: number;
  awayScore: number;
  result: MatchResult;
  referee: string;
}


class MatchBuilder {
  private instance = new Match();

  date = (date: Date): MatchBuilder => {
    this.instance.date = date;
    return this;
  }

  home = (home: string): MatchBuilder => {
    this.instance.home = home;
    return this;
  }

  away = (away: string): MatchBuilder => {
    this.instance.away = away;
    return this;
  }

  homeScore = (homeScore: number): MatchBuilder => {
    this.instance.homeScore = homeScore;
    return this;
  }

  awayScore = (awayScore: number): MatchBuilder => {
    this.instance.awayScore = awayScore;
    return this;
  }

  result = (result: MatchResult): MatchBuilder => {
    this.instance.result = result;
    return this;
  }

  referee = (referee: string): MatchBuilder => {
    this.instance.referee = referee;
    return this;
  }

  build = (): Match => this.instance;
}


export { Match, MatchBuilder };