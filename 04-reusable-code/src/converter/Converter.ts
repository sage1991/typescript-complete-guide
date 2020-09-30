

interface Converter<T, P> {
  convert(input: T): P;
}


export { Converter };