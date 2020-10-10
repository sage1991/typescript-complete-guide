import { User, UserProps } from "../models/User";
import { CollectionView } from "./CollectionView";
import { UserShow } from "./UserShow";


class UserList extends CollectionView<User, UserProps> {

  protected renderItem(model: User, parent: Element): void {
    const show = new UserShow(parent, model);
    show.render();
  }

}


export { UserList };