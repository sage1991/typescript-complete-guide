

interface Attribute<T> {
  get<K extends keyof T>(key: K): T[K];
  getAll(): T;
  set(value: T): void;
}


class GeneralAttribute<T> implements Attribute<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  }

  set = (update: T): void => {
    this.data = Object.assign({}, this.data, update);
  }

  getAll = (): T => {
    return { ...this.data };
  }
}

export { GeneralAttribute, Attribute };