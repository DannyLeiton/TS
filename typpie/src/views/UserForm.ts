import { User } from '../models/User'

export class UserForm {
  constructor(public parent: Element, public model: User) {
    // This is required to re-render with every modell change:
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render()
    })
  }

  eventsMap(): { [key: string]: () => void }{
    return {
      /*'click:button': this.onButtonClick,
      'mouseenter:h1': this.onHeaderHover,*/
      'click:.set-age': this.onSetAgeClick,
      'click:.change-name': this.onChangeNameClick,
      'click:.save-user': this.onSaveUserClick,
    }
  }
  /*
  onHeaderHover(): void {
    console.log('H1 was hovered.')
  }
  
  onButtonClick(): void {
    console.log('Hi There!')
  }
  */

  // An arrow function is required to bind 'this'
  onSetAgeClick = (): void => {
    this.model.setRandomAge()
  }

  onChangeNameClick = (): void => {
    const input = this.parent.querySelector('input');

    // Use type guard to avoid TS scrict mode errors.
    if (input ) {
      const name = input.value;
      this.model.set({ name });
    } else {
      throw new Error('No input found')
    }
  }

  onSaveUserClick = (): void => {
    this.model.save()
    window.alert('User Successfully Saved!')
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <h2></h2>
        <input class="new-name" />
        <h2></h2>
        <div>
          <button class="change-name">Change name</button>
          <button class="set-age">Set Random Age</button>
        </div>
        <h2></h2>
        <div>
          <button class="save-user">Save User</button>
        </div>
      </div>
    `
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':')

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey])
      })
    }
  }

  render(): void {
    // This replaces all the html, which is not a very efficient approach.
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()

    this.bindEvents(templateElement.content)

    this.parent.append(templateElement.content)
  }
}