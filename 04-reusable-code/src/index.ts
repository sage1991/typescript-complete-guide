import { MatchResult } from "./code/MatchResult";
import { MatchConverter } from "./converter/MatchConverter";
import { CsvFileReader } from "./io/CsvFileReader";


const reader = new CsvFileReader("football.csv");
const converter = new MatchConverter();
const matches = converter.convert(reader.read());
console.log(matches);


let homeWin = 0;
let awayWin = 0;
let matchCount = 0;
for (let match of matches) {
  if (match.home !== "Tottenham" && match.away !== "Tottenham") continue;

  if (match.home === "Tottenham" && match.result === MatchResult.HOME_WIN) {
    homeWin++;
    matchCount++;
  } else if (match.away === "Tottenham" && match.result === MatchResult.AWAY_WIN) {
    awayWin++;
    matchCount++;
  } else {
    matchCount++;
  }
}

console.log(`
  [ report for Tottenham ]
  total match count: ${matchCount} games
  home wins: ${homeWin} games
  away wins: ${awayWin} games
  wins: ${homeWin + awayWin} games
`);