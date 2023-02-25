type Callback = () => void

export class Eventing {
  events: { [key: string]: Callback[] } = {}; // 'click', 'hover', 'mouseover'...

  on = (eventName: string, callback: Callback): void => { // also works callback: () => {}
    const handlers =  this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  } // These arrow functions brings a performance penalty, which is worth in this example. 

  trigger = (eventName: string): void => {
    const handlers =  this.events[eventName];
    if (!handlers || handlers.length === 0){
      return;
    }

    handlers.forEach(callback => {
      callback();
    });
  }


}