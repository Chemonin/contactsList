import {createElement} from '../utils.js';

export default class AbstractElement {
  constructor() {
    if (new.target === AbstractElement) {
      throw new Error(`Can't instantiate AbstractComponent, only concrete one.`);
    }
    this._element = 0;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  getTemplate() {
    throw Error(`Abstract method not implemented: getTemplate`);
  }
}
