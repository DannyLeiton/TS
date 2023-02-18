import { faker } from "@faker-js/faker";
import { Mappable } from "./Map";

/*interface point {
  lat: number;
  lng: number;
}*/

export const red = 'red';

export default 'blue'; // Not used in Typescript for convention, for import we should always use Curly Braces {};

export class User implements Mappable{
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'brown'

  constructor(){
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}


