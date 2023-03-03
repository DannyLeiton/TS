/* 
Metadata: -> Proposed feature to be added to JS (and thus, TS).
          -> Snippets of info that can be tied to a method, property, or class definition.
          -> Can be used for super custom stuff.
          -> TS will (optionally) provide type info as metadata.
          -> Read and written using th reflect-metadata package. (npm).
*/

import 'reflect-metadata'
/*
const plane = {
  color: 'gray'
}

Reflect.defineMetadata('note', 'hi there', plane)
Reflect.defineMetadata('height', 10, plane)

console.log('plane', plane)

const note = Reflect.getMetadata('note', plane)
const height =  Reflect.getMetadata('height', plane)

console.log('note', note)
console.log('height', height)


Reflect.defineMetadata('color note', 'hi color', plane, 'color') // Also possible to define it for variable properties.

const colorNote = Reflect.getMetadata('color note', plane, 'color')

console.log('colorNote', colorNote)
*/

@printMetadata
class Plane {
  color: string = 'silver'

  @markFunc('Silver Plane Flying')
  fly(): void {
    console.info('flying')
  }
}

function markFunc(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key)
  }
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly')

console.info(secret, 'secret')

function printMetadata(target: typeof Plane){
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key)
    console.log('printMetadata secret', secret)
  }
}

