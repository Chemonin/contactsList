// import AbstractElement from './abstract-element.js';

export default class Card {
  constructor({name, phone}) {
    // super();
    this._name = name;
    this._phone = phone;
  }

  renderCardView() {
    const shell = document.createElement(`div`);
    shell.innerHTML = this._getViewTemplate();
    return shell.firstChild;
  }

  renderEditView() {
    const shell = document.createElement(`div`);
    shell.innerHTML = this._getEditTemplate();
    return shell.firstChild;
  }

  _getEditTemplate() {
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

  _getViewTemplate() {
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
