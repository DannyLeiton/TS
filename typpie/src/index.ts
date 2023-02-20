console.log('This is Typpie, the coolest web framework, based on Extraction Approach!')

import { User } from "./models/User";

const user = new User({ name: 'Fulanito', age: 35});

console.info(`User Props: ${user.get('name')}, ${user.get('age')}`);

user.set({ name: "Fulanito D'tal" })

console.info(`New User Props: ${user.get('name')}, ${user.get('age')}`);

const userEmpty = new User({});

console.info(`New Empty User Props: ${userEmpty.get('name')}, ${userEmpty.get('age')}`);

user.on('change', () => {
  console.log('change 0');
});
user.on('change', () => {
  console.log('change 1');
});
user.on('otherEvent', () => {
  console.log('otherEvent 0');
});

user.trigger('change');

console.log(user);

user.trigger('otherEvent');