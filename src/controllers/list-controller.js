import CardController from './card-controller.js';
import {Position, render, upload} from '../utils.js';

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

  _onSendError() {
    window.alert(`Conection error. Local data updated`);
    this._renderList(this._dataList);
  }

  _onSendSuccess() {
    window.alert(`Server data updated`);
    this._renderList(this._dataList);
  }

  _onDataChange(newData, oldData) {
    let index = null;
    if (!this._dataList) {
      this._dataList = [];
    }
    if (this._dataList.length !== 0) {
      index = this._dataList.findIndex((item) => item === oldData);
    }
    if (newData === null) {
      this._dataList.splice(index, 1);
    } else if (oldData === null) {
      this._dataList.unshift(newData);
    } else {
      this._dataList[index] = newData;
    }
    upload(this._onSendSuccess.bind(this), this._onSendError.bind(this), this._dataList);
  }

  _onChangeView() {
    this._watchers.forEach((watcher) => watcher());
  }

  init() {
    if (this._dataList) {
      this._dataList.forEach((element) => this._renderContact(element));
    }
  }
}
