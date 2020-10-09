import { GeneralAttribute } from "./Attribute";
import { Collection } from "./Collection";
import { Entity } from "./Entity";
import { Eventing } from "./Eventing";
import { Model } from "./Model";
import { APISync } from "./Sync";

interface UserProps extends Entity {
  name?: string;
  age?: number;
}

class User extends Model<UserProps> {
  private static URL: string = "http://localhost:3000/users";
  static build(data: UserProps): User {
    return new User(
      new GeneralAttribute<UserProps>(data),
      new Eventing(),
      new APISync<UserProps>(User.URL)
    );
  }

  static buildCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(User.URL, json => User.build(json));
  }
}

export { User, UserProps };