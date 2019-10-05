import CardController from './card-controller.js';

export default class ListController {
  constructor(container, dataList) {
    this._container = container;
    this._dataList = dataList;
    this._onDataChange = onDataChange.bind(this);
  }

  onDataChange(newData, oldData) {
    const index = this._dataList.findIndex((item) => item === oldData);
    this._dataList[index] = newData;
  }

  init() {
    this._dataList.forEach((element) => new CardController(this._container, element));
  }
}
