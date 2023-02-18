// Blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing'.
// by default all methods are public.
class Vehicle {
  constructor(public color: string){

  }

  drive(): void {
    console.log('going!');
  }

  honk(): void {
    console.log('beep!');
  }
}

const vehicle = new Vehicle('blue');

vehicle.drive();
vehicle.honk();
console.log(`Vehicle color: ${vehicle.color}`);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  drive(): void {
    console.log('driving!');
  } // Overwrite.
}

const car = new Car(8, 'green');

car.drive();
car.honk();
console.log(`Car color: ${car.color}`);
console.log(`Car # of wheels: ${car.wheels}`);

// Method and Field Modifiers:
// 1. public: can be called any whre, any time.
// 2. private: can only be called by other methods in this class, not by instances.
// 3. protected: can be called by other methods in this class, or other methods in child classes, but not by instances.

// Where to use classes: 
// Classes + Interfaces = How we get really strong code reuse in TS.
// Updated Parcel instructions: > npx parcel index.html
// npm install -g parcel-bundler
// Tools to help us run Typescript in the browser.



