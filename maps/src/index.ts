/// <reference types="@types/google.maps" />; // important import
import { Company } from './Company';
import { User, red } from './User';
import color from './User';

console.log('Hello World!');
console.log(color);
let user = new User();
console.log(User);
console.log(user);
console.log(red);

let company = new Company();
console.log(company);

import { Map } from './Map';

const customMap = new Map('gmap');

customMap.addMarker(user);
customMap.addMarker(company);
