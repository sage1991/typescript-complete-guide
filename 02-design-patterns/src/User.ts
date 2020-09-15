import { Location } from "./types/Location";
import { FakerUtils } from "./utils/FakerUtils";


class User {
  name: string;
  location: Location;

  constructor() {
    this.name = FakerUtils.generateName();
    this.location = FakerUtils.generateLocation();
  }
}

export { User };