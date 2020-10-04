import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Entity } from "./Entity";
import { Attribute } from "./Attribute";

interface UserProps extends Entity {
  name?: string;
  age?: number;
}

class User {
  static URL: string = "http://localhost:3000/users";
  private events: Eventing = new Eventing();
  private sync: Sync<UserProps> = new Sync<UserProps>(User.URL);
  private attributes: Attribute<UserProps>;

  constructor(data: UserProps) {
    this.attributes = new Attribute<UserProps>(data);
  }
}

export { User };