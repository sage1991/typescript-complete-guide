

interface Converter<T = string, P = any> {
  convert(input: T): P;
}


export { Converter };