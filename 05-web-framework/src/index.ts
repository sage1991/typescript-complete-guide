import { User } from "./models/User";
import { UserList } from "./views/UserList";


const root = document.getElementById("root")!;
const users = User.buildCollection();
const userList = new UserList(root, users);
users.on("change", () => {
  userList.render();
})
users.fetch();