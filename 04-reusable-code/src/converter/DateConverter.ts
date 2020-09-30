import { Converter } from "./Converter";

class DateConverter implements Converter<string, Date> {
  convert(dateString: string): Date {
    const dateArray = dateString.split("/").map(value => +value);
    return new Date(dateArray[2], dateArray[1] - 1, dateArray[0]);
  }
}

export { DateConverter };