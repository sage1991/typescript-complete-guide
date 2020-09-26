import { Describeable } from "./Describeable";
import { Locateable } from "./Locateable";

interface Markable extends Describeable, Locateable {
  color: string;
};

export { Markable };