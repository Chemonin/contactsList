import Card from '../components/card.js';
import EditCard from '../components/edit-card.js';
import {Position, render} from '../utils.js';

export default class CardController {
  constructor(container, data) {
    this._container = container;
    this._card = new Card(data);
    this._editCard = new EditCard(data);
    this.create();
  }

  create() {
    this._card.getElement().querySelector(`.card__edit-btn`).addEventListener(`click`, () => {
      this._container.replaceChild(this._editCard.getElement(), this._card.getElement());
    });
    this._editCard.getElement().querySelector(`.card-edit__save-btn`).addEventListener(`click`, () => {
      this._container.replaceChild(this._card.getElement(), this._editCard.getElement());
    });

    render(this._container, this._card.getElement(), Position.BEFOREEND);
  }
}
