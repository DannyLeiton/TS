// try to change it to just "Object", if that makes sense.
// Let's describe the Object Literal using and Interface
interface UserProps {
  name?: string;  // Question mark indicates the prop as optional.
  age?: number; 
}

type Callback = () => void

export class User {
  events: { [key: string]: Callback[] } = {}; // 'click', 'hover', 'mouseover'...

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void { // also works callback: () => {}
    const handlers =  this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers =  this.events[eventName];
    if (!handlers || handlers.length === 0){
      return;
    }

    handlers.forEach(callback => {
      callback();
    });
  }


}