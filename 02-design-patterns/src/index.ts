import { Company } from "./Company";
import { InfoWindow } from "./InfoWindow";
import { Map } from "./Map";
import { Marker } from "./Marker";
import { User } from "./User";

const root = document.getElementById("root")!;

const user = new User();
const company = new Company();
const map = new Map(root);

map.addMarker(new Marker(user));
map.addMarker(new Marker(company));