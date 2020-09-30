import { AbstractSortable } from "../sort/AbstractSortable";
import { Collection } from "./Collection";


class LinkedList<T> extends AbstractSortable implements Collection<T[]> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  
  get data(): T[] {
    let list: T[] = [];
    let cursor = this.head;
    while (cursor) {
      list.push(cursor.data);
      cursor = cursor.next;
    }
    return list;
  }

  get length(): number {
    let cursor = this.head;
    if (!cursor) return 0;

    let length = 0;
    while (cursor) {
      cursor = cursor.next;
      length++;
    }

    return length;
  }

  print = () => console.log(this.data);

  compare = (i:number, j: number): boolean => {
    if (!this.head) throw new Error("list is empty.");
    return this.get(i) > this.get(j);
  }

  swap = (i: number, j: number): void => {
    const ithNode = this.at(i);
    const jthNode = this.at(j);
    const temp = ithNode.data;
    ithNode.data = jthNode.data;
    jthNode.data = temp;
  }

  add = (value: T): void => {
    const node = new Node<T>(value);
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    this.tail!.next = this.tail = node;
  }

  get = (i: number): T => this.at(i).data;

  private at = (i: number): Node<T> | never => {
    if (!this.head) throw new Error("index out of bounds error.");

    let counter = 0;
    let cursor: Node<T> | null = this.head;
    while (cursor) {
      if (counter === i) return cursor;
      cursor = cursor.next;
      counter++;
    }

    throw new Error("index out of bounds error.");
  }
  
}


class Node<T> {
  next: Node<T> | null = null;
  constructor(public data: T) {}
}


export { LinkedList, Node };