import AbstractElement from './abstract-element.js';

export default class Card extends AbstractElement {
  constructor({name, phone}) {
    this._name = name;
    this._phone = phone;
  }

  getTemplate() {
    return `<article class='card'>
      <div class='card__info'>
        <p class='card__name'>${this._name}</p>
        <p class='card__phone'>${this._phone}</p>
      </div>
      <div class='card__controls'>
        <button class='card__delete-btn' type="reset">Delete</button>
        <button class='card__edit-btn' type='button'>Edit</button>
      </div>
    </article>`
  }
}
