
export type Callback = () => void;

class Eventing {
  private events: { [ key: string ]: Callback[] } = {};

  on(eventName: string, listener: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(listener);
    this.events[eventName] = handlers;
  }
  
  trigger(eventName: string): void {
    if (!this.events[eventName] || this.events[eventName].length === 0) return;
    this.events[eventName].forEach(listener => listener());
  }

}

export { Eventing };