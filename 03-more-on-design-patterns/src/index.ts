import { CharactersCollection } from "./collection/CharactersCollection";
import { LinkedList } from "./collection/LinkedList";
import { NumbersCollection } from "./collection/NumbersCollection";

const numbersCollection = new NumbersCollection([ 10, 3, -5, 0 ]);
numbersCollection.sort();

const charactersCollection = new CharactersCollection("XadAct");
charactersCollection.sort();

const linkedList = new LinkedList<number>();
linkedList.add(100);
linkedList.add(-3);
linkedList.add(-10);
linkedList.add(4);
linkedList.sort();


console.log(numbersCollection.data);
console.log(charactersCollection.data);
console.log(linkedList.data);