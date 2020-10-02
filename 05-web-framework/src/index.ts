import { User } from "./models/User";

const user = new User({ name: "harry", age: 30 });

console.log(user.get("name"));
console.log(user.get("age"));

user.set({ name: "lucy" });
console.log(user.get("name"));
console.log(user.get("age"));