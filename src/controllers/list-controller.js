import CardController from './card-controller.js';

export default class ListController {
  constructor(container, dataList) {
    this._container = container;
    this._dataList = dataList;
  }

  init() {
    this._dataList.forEach((element) => new CardController(this._container, element));
  }
}
