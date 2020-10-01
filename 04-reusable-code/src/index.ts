import { CsvFileReaderAdaptor } from "./io/adaptor/CsvFileReaderAdaptor";
import { Summary } from "./report/Summary";


const reader = CsvFileReaderAdaptor.withMatchConverter("football.csv");
const summary2 = Summary.withWinsAnalysis("Tottenham");

const matches = reader.read();
summary2.summarize(matches);