import { User } from "../models/User";
import { EventMap } from "../types/EventMap";


class UserForm {
  constructor(private parent: Element, private model: User) {
    this.bindModel();
  }


  private bindModel() {
    this.model.on("change", this.render.bind(this));
  }


  eventsMap(): EventMap {
    return {
      "click:.set-age": this.onSetAgeClick.bind(this),
      "click:.set-name": this.onSetNameClick.bind(this)
    };
  }


  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User name: ${ this.model.get("name") }</div>
        <div>User age: ${ this.model.get("age") }</div>
        <input />
        <button class="set-name">Click Me</button>
        <button class="set-age">Set random age</button>
      </div>
    `;
  }
  

  render(): void {
    const template = document.createElement("template");
    template.innerHTML = this.template();
    this.bindEvents(template.content);
    
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
  

  private onSetAgeClick<MouseEvent>(e: MouseEvent): void {
    this.model.setRandomAge();
  }


  private onSetNameClick<MouseEvent>(e: MouseEvent): void {
    const input = this.parent.querySelector("input")!;
    const { value } = input;
    this.model.set({ name: value });
  }
}


export { UserForm };