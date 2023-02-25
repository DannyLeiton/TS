// Important rules to consider:
// 1. In TS, strings can be types.
// 2. In JS (=> TS), all object keys are strings.

export class Attributes<T extends Object> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => { // Advanced Generic constraint
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}