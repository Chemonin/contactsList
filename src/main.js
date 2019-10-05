import {dataList} from './data.js';
import {Position, render} from './utils.js';
import ContactCreator from './components/contactCreator.js';
import ListController from './controllers/list-controller.js';
const container = document.querySelector(`.container`);
const table = document.querySelector(`.table`);
const newContact = document.querySelector(`.new-contact`);
const form = new ContactCreator();

render(newContact, form.getElement(), Position.BEFOREEND);
const listController = new ListController(table, dataList);
listController.init();
console.dir(dataList);
