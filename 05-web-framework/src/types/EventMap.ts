import { EventHandler } from "./EventHandler";

interface EventMap {
  [ eventName: string ]: EventHandler;
}

export { EventMap };