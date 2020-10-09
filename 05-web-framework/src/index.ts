import { User } from "./models/User";
import { UserForm } from "./views/UserForm";


const root = document.getElementById("root")!;
const user = User.build({ name: "", age: 0 });
const userForm = new UserForm(root, user);

userForm.render();