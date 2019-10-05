import CardController from './card-controller.js';
import {Position, render, unrender} from '../utils.js';

export default class ListController {
  constructor(container, dataList) {
    this._container = container;
    this._dataList = dataList;
    this._onDataChange = this._onDataChange.bind(this);
    this._onChangeView = this._onChangeView.bind(this);
    this._watchers = [];
  }

  createContact(entryData) {
    this._onDataChange(entryData, null);
  }

  _renderList(contactsInfo) {
    this._container.innerHTML = ``;
    this._dataList.forEach((element) => this._renderContact(element));
  }

  _renderContact(contactData) {
      const cardController = new CardController(this._container, contactData, this._onDataChange, this._onChangeView);
      this._watchers.push(cardController.disableChange.bind(cardController));
  }
  _onDataChange(newData, oldData) {
    const index = this._dataList.findIndex((item) => item === oldData);
    if (newData === null) {
      this._dataList.splice(index, 1);
    } else if (oldData === null) {
      this._dataList.unshift(newData);
    } else {
      this._dataList[index] = newData;
    }
    this._renderList(this._dataList);
  }

  _onChangeView() {
    this._watchers.forEach((watcher) => watcher());
  }

  init() {
    this._dataList.forEach((element) => this._renderContact(element));
  }
}
