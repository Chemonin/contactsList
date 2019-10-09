import Card from '../components/card.js';
import {Position, render} from '../utils.js';

export default class CardController {
  constructor(container, data, onDataChange, onChangeView) {
    this._data = data;
    this._container = container;
    this._card = new Card(data);
    this._onChangeView = onChangeView;
    this._onDataChange = onDataChange;
    this._cardView = this._card.renderCardView();
    this._cardEdit = this._card.renderEditView();
    this.create();
  }

  create() {
    this._cardView.querySelector(`.card__edit-btn`).addEventListener(`click`, () => {
      this._container.replaceChild(this._cardEdit, this._cardView);
      this._onChangeView();
    });

    this._cardView.querySelector(`.card__delete-btn`).addEventListener(`click`, () => {
      this._onDataChange(null, this._data);
    });
    this._cardEdit.addEventListener(`submit`, (evt) => {
      evt.preventDefault();
      const formData = new FormData(this._cardEdit);
      const changes = {
        name: formData.get(`name`),
        phone: formData.get(`phone`),
      };
      this._onDataChange(changes, this._data);
    });
    this._cardEdit.querySelector(`.card-edit__name`).addEventListener(`change`, (evt) => {
      const re = new RegExp('^([\u0400-\u04FFa-zA-Z\-]){2,}$', 'gi');
      if(!re.test(evt.currentTarget.value)) {
        evt.currentTarget.setCustomValidity(`Please enter a name in Russian or English. Min length 2 symbols`);
      } else {
        evt.currentTarget.setCustomValidity(``);
      }
    });
    this._cardEdit.querySelector(`.card-edit__phone`).addEventListener(`change`, (evt) => {
      const re = new RegExp('^[\+]?([0-9\-]){2,}$', 'gi');
      if(!re.test(evt.currentTarget.value)) {
        evt.currentTarget.setCustomValidity(`number format: +Xnumber or 8number`);
      } else {
        evt.currentTarget.setCustomValidity(``);
      }
    });

    render(this._container, this._cardView, Position.BEFOREEND);
  }

  disableChange() {
    const deleteBtn = this._cardView.querySelector(`.card__delete-btn`);
    const editBtn = this._cardView.querySelector(`.card__edit-btn`);
    editBtn.setAttribute(`disabled`, true);
    deleteBtn.setAttribute(`disabled`, true);
  }
}
