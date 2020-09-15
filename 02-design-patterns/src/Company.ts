import { Location } from "./types/Location";
import { FakerUtils } from "./utils/FakerUtils";


class Company {
  name: string;
  catchPhrase: string;
  location: Location;

  constructor() {
    this.name = FakerUtils.generateCompanyName();
    this.catchPhrase = FakerUtils.generateCatchPhrase();
    this.location = FakerUtils.generateLocation();
  }
}


export { Company };