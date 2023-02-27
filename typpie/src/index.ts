console.log('This is Typpie, a Typed Web Framework!')

// import axios, { AxiosResponse } from 'axios';
//import { Collection } from "./models/Collection"
//import { User/*, UserProps*/ } from "./models/User" 

/* First approach:
const user = new User({ name: 'Fulanito', age: 35});

console.info(`User Props: ${user.get('name')}, ${user.get('age')}`);

user.set({ name: "Fulanito D'tal" })

console.info(`New User Props: ${user.get('name')}, ${user.get('age')}`);

const userEmpty = new User({});

console.info(`New Empty User Props: ${userEmpty.get('name')}, ${userEmpty.get('age')}`);
*/
/*
-----------------------------------------------------------------
Doesn't work this way after separating the events to a diff class.
Now requires user.events.on / .trigger check line: 70.
-----------------------------------------------------------------
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
*/

// Install > npm install -g json-server
// Create and fill file: db.json
// > json-server -w db.json
// > npm install axios

/* Examples after installing json-server.
axios.post('http://localhost:3000/users', {
  name: 'Nolito',
  age: 50
});

const jsonUser = new User({ id: 19 });
 
jsonUser.fetch();

setTimeout(() => {
  console.log(jsonUser);
}, 1000);
*/
/*let marito = {};
axios.get('http://localhost:3000/users/1').then(user => marito=user);
console.log(marito);*/

/* Before Async and Attributes refactoring:
const oldUser = new User({ id: 1 });
oldUser.set({ name: 'Otro won', age: 40 })
oldUser.save();

const newUser = new User({});
newUser.set({ name: 'New won', age: 44 })
newUser.save();

newUser.events.on('change', () => {
  console.log('change 0');
});

newUser.events.on('change', () => {
  console.log('change 1');
});

newUser.events.trigger('change');
*/

/* FW v2

const user = new User ({ name: 'Perensejo', age: 0 })

Waay 2 complex:
user.sync.save({ name: user.attributes.get('name'), age: user.attributes.get('age')});
*/
/*
const user = new User ({ age: 40 })

user.on('change', () => {
  console.log(user)
});

user.set({ name: 'Lemita' });*/
/*
const user = new User ({ id: 1, name: 'New Name', age: 5 })

user.on('save', () => {
  console.log(user)
});

user.save();*/
/*
const user = User.buildUser({ id: 3 });

user.on('change', () => {
  console.log(user);
});

user.fetch();
*/
/*
const url = 'http://localhost:3000/users'

const collection = new Collection<User, UserProps>(
  url,
  (json: UserProps) => User.(json)
);*/
/*
const collection = User.buildUserCollection();

collection.on('change', () => {
  console.log(collection);
});

collection.fetch();
*/

import { UserForm } from "./views/UserForm"

const userForm =  new UserForm(document.getElementById('root'))

userForm.render()




