import { Location } from "./Location";

// instructions to every other class
// on how they can be an argument of "addMarker"
interface Locateable {
  location: Location;
}

export { Locateable };