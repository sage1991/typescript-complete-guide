import { User, UserProps } from "../models/User";
import { View } from "./View";


class UserShow extends View<User, UserProps> {

  protected template(): string {
    return `
      <h1>User Detail</h1>
      <div>User name: ${ this.model.get("name") }</div>
      <div>User age: ${ this.model.get("age") }</div>
    `;
  }
}


export { UserShow };