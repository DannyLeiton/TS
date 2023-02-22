
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

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }
}