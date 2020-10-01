import { Match } from "../../model/Match";
import { Converter } from "../converter/Converter";
import { MatchConverter } from "../converter/impl/MatchConverter";
import { CsvFileReader } from "../impl/CsvFileReader";
import { Reader } from "../Reader";


class CsvFileReaderAdaptor<T> implements Reader<T> {
  constructor(private reader: CsvFileReader, private converter: Converter<string[][], T>) {}

  static withMatchConverter(fileName: string): CsvFileReaderAdaptor<Match[]> {
    return new CsvFileReaderAdaptor(new CsvFileReader(fileName), new MatchConverter());
  }

  read = (): T => this.converter.convert(this.reader.read());
}

export { CsvFileReaderAdaptor };