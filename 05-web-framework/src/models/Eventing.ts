
export type Callback = () => void;

interface Events {
  on(eventName: string, listener: Callback): void;
  trigger(eventName: string): void;
}


class Eventing implements Events {
  private events: { [ key: string ]: Callback[] } = {};

  on = (eventName: string, listener: Callback): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(listener);
    this.events[eventName] = handlers;
  }
  
  trigger = (eventName: string): void => {
    if (!this.events[eventName] || this.events[eventName].length === 0) return;
    this.events[eventName].forEach(listener => listener());
  }

}

export { Events, Eventing };