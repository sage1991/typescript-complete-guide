import { Location } from "./types/Location";
import { Markable } from "./types/Markable";
import { FakerUtils } from "./utils/FakerUtils";


class User implements Markable {
  name: string;
  location: Location;
  color: string = "blue";

  constructor() {
    this.name = FakerUtils.generateName();
    this.location = FakerUtils.generateLocation();
  }

  describe = () => `<h3>user name: ${this.name}</h3>`;

}

export { User };