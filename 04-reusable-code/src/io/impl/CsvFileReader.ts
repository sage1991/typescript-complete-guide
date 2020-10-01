import fs from "fs";
import { Reader } from "../Reader";

class CsvFileReader implements Reader<string[][]> {
  constructor(private fileName: string) {}

  read(): string[][] {
    return fs.readFileSync(this.fileName, { encoding: "utf-8" })
              .split("\n")
              .map(row => row.split(","));
  }
}


export { CsvFileReader };