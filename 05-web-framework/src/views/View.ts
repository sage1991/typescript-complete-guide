import { Entity } from "../models/Entity";
import { Model } from "../models/Model";
import { EventMap } from "../types/EventMap";
import { Region } from "../types/Region";


abstract class View<T extends Model<P>, P extends Entity> {
  protected region: Region = {};

  constructor(protected parent: Element, protected model: T) {
    this.bindModel();
  }

  protected abstract template(): string;
  protected eventsMap(): EventMap {
    return {};
  }
  
  
  protected regionMap(): { [key: string]: string } {
    return {};
  }


  protected bindModel(): void {
    this.model.on("change", this.render.bind(this));
  }


  render(): void {
    const template = document.createElement("template");
    template.innerHTML = this.template();
    this.bindEvents(template.content);
    this.mapRegion(template.content);

    this.onRender();

    this.parent.innerHTML = "";
    this.parent.append(template.content);
  }


  private bindEvents(fragment: DocumentFragment): void {
    const events = this.eventsMap();

    Object.keys(events).forEach(key => {
      const eventHandler = events[key];
      const [ eventName, selector ] = key.split(":");
      fragment.querySelectorAll(selector)
              .forEach(element => element.addEventListener(eventName, eventHandler))
    });
  }


  private mapRegion(fragment: DocumentFragment): void {
    const regionMap = this.regionMap();

    Object.keys(regionMap).forEach(key => {
      const selector = regionMap[key];
      const element = fragment.querySelector(selector);
      if (!element) return;
      this.region[key] = element;
    });
  }


  protected onRender(): void {

  }
}


export { View };