import { User, UserProps } from "../models/User";
import { UserForm } from "./UserForm";
import { UserShow } from "./UserShow";
import { View } from "./View";

class UserEdit extends View<User, UserProps> {

  protected template(): string {
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
    `;
  }


  protected regionMap(): { [key: string]: string } {
    return {
      userShow: ".user-show",
      userForm: ".user-form"
    }
  }


  protected bindModel(): void {}

  protected onRender(): void {
    const show = new UserShow(this.region.userShow, this.model);
    show.render();

    const form = new UserForm(this.region.userForm, this.model);
    form.render();
  }
}


export { UserEdit };