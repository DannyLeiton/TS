// Annotations around objects:

const profile = {
  firstname: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};


const { age, firstname }: {age:number, firstname: string} = profile;

console.log(`age: ${age}, firstname: ${firstname}`)

// deprecated... var name
//const { name }: {name: string} = profile;

const { coords: {lat, lng} }: {coords: { lat:number, lng:number } } = profile;

profile.setAge(50);

console.log(profile);