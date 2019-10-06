import Card from '../components/card.js';
import EditCard from '../components/edit-card.js';
import {Position, render} from '../utils.js';

export default class CardController {
  constructor(container, data, onDataChange, onChangeView) {
    this._data = data;
    this._container = container;
    this._card = new Card(data);
    this._onChangeView = onChangeView;
    this._onDataChange = onDataChange;
    this._editCard = new EditCard(data);
    this.create();
  }

  create() {
    this._card.getElement().querySelector(`.card__edit-btn`).addEventListener(`click`, () => {
      this._container.replaceChild(this._editCard.getElement(), this._card.getElement());
      this._onChangeView();
    });

    this._card.getElement().querySelector(`.card__delete-btn`).addEventListener(`click`, () => {
      this._onDataChange(null, this._data);
    });
    this._editCard.getElement().addEventListener(`submit`, (evt) => {
      evt.preventDefault();
      const formData = new FormData(this._editCard.getElement());
      const changes = {
        name: formData.get(`name`),
        phone: formData.get(`phone`),
      };
      this._onDataChange(changes, this._data);
    });
    this._editCard.getElement().querySelector(`.card-edit__name`).addEventListener(`change`, (evt) => {
      const re = new RegExp('^([\u0400-\u04FFa-zA-Z\-]){2,}$', 'gi');
      if(!re.test(evt.currentTarget.value)) {
        evt.currentTarget.setCustomValidity(`Please enter a name in Russian or English. Min length 2 symbols`);
      } else {
        evt.currentTarget.setCustomValidity(``);
      }
    });
    this._editCard.getElement().querySelector(`.card-edit__phone`).addEventListener(`change`, (evt) => {
      const re = new RegExp('^[\+]?([0-9\-]){2,}$', 'gi');
      if(!re.test(evt.currentTarget.value)) {
        evt.currentTarget.setCustomValidity(`number format: +Xnumber or 8number`);
      } else {
        evt.currentTarget.setCustomValidity(``);
      }
    });

    render(this._container, this._card.getElement(), Position.BEFOREEND);
  }

  disableChange() {
    const deleteBtn = this._card.getElement().querySelector(`.card__delete-btn`);
    const editBtn = this._card.getElement().querySelector(`.card__edit-btn`);
    editBtn.setAttribute(`disabled`, true);
    deleteBtn.setAttribute(`disabled`, true);
  }
}
