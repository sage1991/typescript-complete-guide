
interface Collection<T> {
  data: T;
  length: number;
  add(): void;
}

export { Collection };