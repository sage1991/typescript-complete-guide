import { MatchResult } from "../code/MatchResult";
import { Match, MatchBuilder } from "../model/Match";
import { Converter } from "./Converter";
import { DateConverter } from "./DateConverter";


class MatchConverter implements Converter<string[][], Match[]> {
  convert(contents: string[][]): Match[] {
    const dateConverter = new DateConverter();
    return contents.map(matchRecord => {
      return new MatchBuilder().date(dateConverter.convert(matchRecord[0]))
                                .home(matchRecord[1])
                                .away(matchRecord[2])
                                .homeScore(+matchRecord[3])
                                .awayScore(+matchRecord[4])
                                .result(matchRecord[5] as MatchResult)
                                .referee(matchRecord[6])
                                .build();
    });
  }
}

export { MatchConverter };