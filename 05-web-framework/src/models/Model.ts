import { AxiosResponse } from "axios";
import { Attribute } from "./Attribute";
import { Entity } from "./Entity";
import { Events } from "./Eventing";
import { Sync } from "./Sync";

abstract class Model<T extends Entity> {
  constructor(
    private attributes: Attribute<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}
  
  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: T) {
    this.attributes.set(update);
    this.trigger("change");
  }
  
  fetch() {
    const id = this.get("id");
    if (typeof id !== "number") return;
    this.sync.fetch(id)
              .then((response: AxiosResponse<T>): void => this.set(response.data));
  }

  save() {
    this.sync.save(this.attributes.getAll())
              .then((response: AxiosResponse): void => this.trigger("save"))
              .catch((error) => this.trigger("error"));
  }
}

export { Model };