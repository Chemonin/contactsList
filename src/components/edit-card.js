import AbstractElement from './abstract-element.js';

export default class EditCard extends AbstractElement {
  constructor({name, phone}) {
    this._name = name;
    this._phone = phone;
  }

  getTemplate() {
    return `<form class='card-edit' method='post'>
      <div class='card-edit__info'>
        <label>Name<input class='card-edit__name' type='text' value='${this._name}'></label>
        <label>Phone<input class='card-edit__phone' type='text' value='${this._phone}'></label>
      </div>
      <div class='card-edit__controls'>
        <button class='card-edit__delete-btn' type="reset">Delete</button>
        <button class='card-edit__save-btn' type='submit'>Save</button>
      </div>
    </form>`
  }
}
