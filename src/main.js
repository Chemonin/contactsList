import {dataList} from './data.js';
import {Position, render} from './utils.js';
import ContactCreator from './components/contactCreator.js';
import ListController from './controllers/list-controller.js';
const container = document.querySelector(`.container`);
const table = document.querySelector(`.table`);
const newContact = document.querySelector(`.new-contact`);
const form = new ContactCreator();
// const entrys = Array.from(form.getElement().querySelectorAll(`input`));
// console.log(entrys);
// entrys.forEach((element) => {
//   element.addEventListener(`focus`, () => {
//     console.log(`hello`);
//     form.getElement().querySelector(`.add-form__btn`).removeAttribute(`disabled`);
//   });
// });

render(newContact, form.getElement(), Position.BEFOREEND);
const listController = new ListController(table, dataList);
listController.init();

form.getElement().addEventListener(`submit`, (evt) => {
  evt.preventDefault();
  const formData = new FormData(form.getElement());
  const entry = {
    name: formData.get(`new-name`),
    phone: formData.get(`new-phone`),
  };
  console.log(entry);
  form.getElement().reset();
  listController.createContact(entry);
});
