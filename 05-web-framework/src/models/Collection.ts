import { Eventing } from "./Eventing";
import Axios from "axios";

class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();
  constructor(public rootUrl: string, private deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch() {
    Axios.get(this.rootUrl)
        .then(response => {
          response.data.forEach((value: K) => {
            const instance = this.deserialize(value);
            this.models.push(instance);
          });
          this.trigger("change");
        });
  }
}

export { Collection };