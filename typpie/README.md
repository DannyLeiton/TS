Object2
Typpie is based on Extraction Approach.
It has Generic Classes with:
private data: ObjectProps => Object to store info about a particular Object Entity.
get(propName: string): (string|number) => Gets a single piece of info about this object (keyName).
set(update: ObjectProps): void => Changes info about this Object.
on(eventName: string): void => Registers an event handler with this object, so other parts of the app know when something changes.
trigger(eventName: string): void => Triggers and event to let kno other parts of the app that something has changed.
fetch(): Promise => Fetches some data from the server about a particular user.
save() => Saves some data to the server about this object.
