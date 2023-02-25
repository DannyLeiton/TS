import { Axios, AxiosResponse } from 'axios';
import { Eventing } from './Eventing';
import { Sync } from './Synch';
import { Attributes } from './Attributes';

// Let's describe the Object Literal using and Interface
export interface UserProps {
  id?: number;
  name?: string;  // Question mark indicates the prop as optional.
  age?: number; 
}

const rootUrl = 'http://localhost:3000/users';

// To re-integrate events:
// Option 1: Accept dependencies as second constructor argument.
// Option 2: Only accept dependencies into constructor. Define a
//  static class method to preconfigure User properties afterwards.
// Option 3: Only accept properties into constructor. Hard code
//  dependencies as class properties.

export class User {
  public events: Eventing = new Eventing(); // This will work best #3.
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes: Attributes<UserProps>;
/*These nested objects are hardcoded + don't use interfaces*/
  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }


/*We also don't want to have to implement all these methods for each new 'model' we create*/
  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: UserProps): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.get('id')

    if(typeof id !== 'number'){
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id).then(
      (response: AxiosResponse): void => {
        this.set(response.data);
      }
    );
  }

  save(): void {
    this.sync.save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  }
}