@classDeco
class Boat {
  //@testDecorator
  color: string = 'red' // property
  
  //@testDecorator
  get formattedColor(): string { // accessor
    if (this.color != 'red') {
      throw new Error()
    } else {
      return `This boat's color is ${this.color}`
    }
  }

  //@testDecorator
  //@logError
  @customError('Custom factory error')
  pilot(@paramDeco speed: string): void { // method
    if (speed === "fast"){
      console.log('swish')
    } else {
      throw new Error()
    }
  }
}

function classDeco(constructor: typeof Boat) {
  console.log(constructor) // [Function: Boat]
}

function paramDeco(target: any, key: string, index: number) {
  console.log(key, index)
}

function testDecorator(target: any, key: string): void {
  console.log(`Target: ${target}`)
  console.log(`Key: ${key}`)
}

testDecorator(Boat.prototype, 'pilot')

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value

  desc.value = function() {
    try {
      method()
    } catch (e) {
      console.log('An error ocurred.')
    }
  }
}

const boat = new Boat()

console.log(Object.getOwnPropertyDescriptor(boat, 'color'))

//console.log(Object.defineProperty(boat, 'color', { writable: false }))

//boat.color = 'green' // Error cuz of writable: false

console.log(boat)

boat.pilot("slow")

// Decorator factory:
function customError(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value
  
    desc.value = function() {
      try {
        method()
      } catch (e) {
        console.log(errorMessage)
      }
    }
  }
}

boat.formattedColor


/** Decorators on a property, method, accessor **
 *  First arg is the prototype of the object
 *  Second arg is the key of the property/method/accessor on the object
 *  Third arg is the property descriptor
 *  Decorators are applied when the code for this calss is ran, not when an instance is created
 * 
 *  Why are decorators useful? R/ 
 * 
 *  Property Decriptor for Methods
 *  writable: whether or not this property can be changed.
 *  enumerable: whether or not this property get looped over by a 'for in'
 *  value: current one 
 *  configurable: property def can be changed and property can be deleted
 * 
 * Code in JS:
 * "use strict";
 * 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;                      //Notice getOwnPropertyDescriptor
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class Boat {
    constructor() {
        this.color = 'red'; // property
    }
    get formattedColor() {
        return `This boat's color is ${this.color}`;
    }
    pilot() {
        console.log('swish');
    }
}
__decorate([
    testDecorator,
    __metadata("design:type", String)
], Boat.prototype, "color", void 0);
__decorate([
    testDecorator,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Boat.prototype, "formattedColor", null);
__decorate([
    testDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Boat.prototype, "pilot", null);
function testDecorator(target, key) {
    console.log(`Target: ${target}`);
    console.log(`Key: ${key}`);
}
 * 
 * 
 * 
 * */


