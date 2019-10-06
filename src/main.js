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

form.getElement().querySelector(`#new-name`).addEventListener(`change`, (evt) => {
  const re = new RegExp('^([\u0400-\u04FFa-zA-Z\-]){2,}$', 'gi');
  if(!re.test(evt.currentTarget.value)) {
    evt.currentTarget.setCustomValidity(`Please enter a name in Russian or English. Min length 2 symbols`);
  } else {
    evt.currentTarget.setCustomValidity(``);
  }
});
form.getElement().querySelector(`#new-phone`).addEventListener(`change`, (evt) => {
  const re = new RegExp('^[\+]?([0-9\-]){2,}$', 'gi');
  if(!re.test(evt.currentTarget.value)) {
    evt.currentTarget.setCustomValidity(`number format: +Xnumber or 8number`);
  } else {
    evt.currentTarget.setCustomValidity(``);
  }
});

form.getElement().addEventListener(`submit`, (evt) => {
  evt.preventDefault();
  const formData = new FormData(form.getElement());
  const entry = {
    name: formData.get(`new-name`),
    phone: formData.get(`new-phone`),
  };
  form.getElement().reset();
  listController.createContact(entry);
});
