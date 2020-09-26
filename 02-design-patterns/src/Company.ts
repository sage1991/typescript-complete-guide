import { Location } from "./types/Location";
import { Markable } from "./types/Markable";
import { FakerUtils } from "./utils/FakerUtils";


class Company implements Markable {
  name: string;
  catchPhrase: string;
  location: Location;
  color: string = "red";

  constructor() {
    this.name = FakerUtils.generateCompanyName();
    this.catchPhrase = FakerUtils.generateCatchPhrase();
    this.location = FakerUtils.generateLocation();
  }

  describe = () => `
    <h3>Company Name: ${this.name}</h3>
    <h5>Catch Phrase: ${this.catchPhrase}</h5>
  `;

}


export { Company };