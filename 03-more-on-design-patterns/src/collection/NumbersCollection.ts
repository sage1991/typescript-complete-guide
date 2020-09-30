import { AbstractSortable } from "../sort/AbstractSortable";
import { Collection } from "./Collection";

class NumbersCollection extends AbstractSortable implements Collection<number[]> {
  constructor(public data: number[]) {
    super();
  }
  
  get length(): number {
    return this.data.length;
  }

  compare = (i:number, j: number): boolean => {
    return this.data[i] > this.data[j];
  }

  swap = (i: number, j: number): void => {
    const temp = this.data[j];
    this.data[j] = this.data[i];
    this.data[i] = temp;
  }
}


export { NumbersCollection };