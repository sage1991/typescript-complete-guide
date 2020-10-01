
interface Analyzer<T, P = string> {
  run(matches: T): P;
}

export { Analyzer };