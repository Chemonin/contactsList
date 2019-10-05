import {dataList} from './data.js';
import ListController from './controllers/list-controller.js';

const table = document.querySelector(`.table`);
const listController = new ListController(table, dataList);
listController.init();
console.dir(dataList);
