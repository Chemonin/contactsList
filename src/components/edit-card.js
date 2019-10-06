import AbstractElement from './abstract-element.js';

export default class EditCard extends AbstractElement {
  constructor({name, phone}) {
    super();
    this._name = name;
    this._phone = phone;
  }

  getTemplate() {
    return `<form class='card-edit' method='post'>
      <div class='card-edit__info'>
        <label>Name<input class='card-edit__name' type='text' name='name' value='${this._name}' ></label>
        <label>Phone<input class='card-edit__phone' type='text' name='phone' value='${this._phone}' ></label>
      </div>
      <div class='card-edit__controls'>
        <button class='card-edit__save-btn' type='submit'>Save</button>
      </div>
    </form>`
  }
}
