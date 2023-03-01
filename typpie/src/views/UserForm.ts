import { User, UserProps } from '../models/User'
import { View } from './View'

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void }{
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.change-name': this.onChangeNameClick,
      'click:.save-user': this.onSaveUserClick,
    }
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge()
  }

  onChangeNameClick = (): void => {
    const input = this.parent.querySelector('input');

    // Use type guard to avoid TS strict mode errors.
    if (input ) {
      const name = input.value;
      this.model.set({ name });
    } else {
      throw new Error('No input found')
    }
  }

  onSaveUserClick = (): void => {
    this.model.save()
    window.alert(`User: ${this.model.get('name')}, aged: ${this.model.get('age')}\nSuccessfully Saved!`)
  }

  template(): string {
    return `
      <div>
        <h2>User Form</h2>
        <input class="new-name" placeholder="${this.model.get('name')}" />
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
}