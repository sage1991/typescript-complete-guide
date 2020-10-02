
type Callback = () => void;

interface UserProps {
  name?: string; 
  age?: number;
}


class User {
  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(newData: UserProps): void {
    this.data = Object.assign({}, this.data, newData);
  }

  on(eventName: string, listener: Callback): void {
    
  }
  
  trigger(eventName: string): void {

  }
}

export { User };