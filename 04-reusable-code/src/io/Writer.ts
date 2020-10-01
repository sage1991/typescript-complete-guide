
interface Writer<T = string> {
  write(message: T): void;
}

export { Writer };