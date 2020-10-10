import { User, UserProps } from "../models/User";
import { EventMap } from "../types/EventMap";
import { View } from "./View";


class UserForm extends View<User, UserProps> {
  protected eventsMap(): EventMap {
    return {
      "click:.set-age": this.onSetAgeClick.bind(this),
      "click:.set-name": this.onSetNameClick.bind(this),
      "click:.save-user": this.onSaveClick.bind(this)
    };
  }


  protected template(): string {
    return `
      <div>
        <input placeholder="${ this.model.get("name") }" />
        <button class="set-name">Update Name</button>
        <button class="set-age">Set random age</button>
        <button class="save-user">Save</button>
      </div>
    `;
  }


  private onSetAgeClick<MouseEvent>(e: MouseEvent): void {
    this.model.setRandomAge();
  }


  private onSetNameClick<MouseEvent>(e: MouseEvent): void {
    const input = this.parent.querySelector("input")!;
    const { value } = input;
    this.model.set({ name: value });
  }


  private onSaveClick<MouseEvent>(e: MouseEvent): void {
    this.model.save();
  }
}


export { UserForm };