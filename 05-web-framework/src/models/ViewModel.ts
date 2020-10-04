import { Callback } from "./Eventing";

interface ViewModel<T> {
  get(): T;
  set(data: T): void;
  on(eventName: string, listener: Callback): void;
  trigger(): void;
  fetch(): void;
  save(): void;
}

export { ViewModel };