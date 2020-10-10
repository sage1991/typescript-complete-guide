import { Collection } from "../models/Collection";

abstract class CollectionView<T, K> {
  constructor(private parent: Element, private collection: Collection<T, K>) {}


  protected abstract renderItem(model: T, parent: Element): void;


  async render(): Promise<void> {
    this.parent.innerHTML = "";
    
    const fragment = document.createDocumentFragment();
    this.collection.models.forEach(model => {
      const div = document.createElement("div");
      this.renderItem(model, div);
      fragment.append(div);
    });

    this.parent.append(fragment);
  }
}


export { CollectionView };