import AbstractElement from './abstract-element.js';

export default class ContactCreator extends AbstractElement {
  getTemplate() {
    return `<form class='add-form' method='post'>
      <label class='visually-hidden' for='new-name'>Name</label>
      <input type='text' id='new-name' placeholder='enter name'>
      <label class='visually-hidden' for='new-phone'>Phone</label>
      <input type='text' id='new-phone' placeholder='enter phone'>
      <button class='add-form__btn' type='submit'>Create</button>
    </form>`;
  }
}
