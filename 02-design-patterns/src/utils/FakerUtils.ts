import faker from "faker";
import { Location } from "../types/Location";

class FakerUtils {

  static generateName(): string {
    return `${faker.name.firstName()} ${faker.name.lastName()}`;
  }

  static generateLocation(): Location {
    return { lat: +faker.address.latitude(), lng: +faker.address.longitude() };
  }
  
  static generateCompanyName(): string {
    return faker.company.companyName();
  }

  static generateCatchPhrase(): string {
    return faker.company.catchPhrase();
  }
}


export { FakerUtils };