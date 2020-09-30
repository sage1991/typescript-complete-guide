import { AbstractSortable } from "../sort/AbstractSortable";
import { Collection } from "./Collection";

class CharactersCollection extends AbstractSortable implements Collection<string> {
  constructor(public data: string) {
    super();
  }
  
  get length(): number {
    return this.data.length;
  }

  compare = (i:number, j: number): boolean => {
    return this.data[i].toLowerCase() > this.data[j].toLowerCase();
  }

  swap = (i: number, j: number): void => {
    const characters = this.data.split("");
    const temp = characters[j];
    characters[j] = characters[i];
    characters[i] = temp;
    this.data = characters.join("");
  }
}

export { CharactersCollection };