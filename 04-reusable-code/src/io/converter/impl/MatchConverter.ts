import { MatchResult } from "../../../code/MatchResult";
import { Match, MatchBuilder } from "../../../model/Match";
import { Converter } from "../Converter";
import { DateConverter } from "./DateConverter";


class MatchConverter implements Converter<string[][], Match[]> {
  convert(contents: string[][]): Match[] {
    const dateConverter = new DateConverter();
    return contents.map(row => {
      return new MatchBuilder().date(dateConverter.convert(row[0]))
                                .home(row[1])
                                .away(row[2])
                                .homeScore(+row[3])
                                .awayScore(+row[4])
                                .result(row[5] as MatchResult)
                                .referee(row[6])
                                .build();
    });
  }
}

export { MatchConverter };