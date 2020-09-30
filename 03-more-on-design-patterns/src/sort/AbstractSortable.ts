import { Sortable } from "./Sortable";

abstract class AbstractSortable implements Sortable {
  
  abstract length: number;
  abstract swap(i: number, j: number): void;
  abstract compare(i: number, j: number): boolean;

  sort = (): void => {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j+1)) this.swap(j, j+1);
      }
    }
  }
  
}

export { AbstractSortable };