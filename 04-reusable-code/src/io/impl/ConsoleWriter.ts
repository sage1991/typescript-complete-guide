import { Writer } from "../Writer";

class ConsoleWriter implements Writer {
  write = (message: string): void => console.log(message);
}

export { ConsoleWriter };