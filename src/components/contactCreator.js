import AbstractElement from './abstract-element.js';

export default class ContactCreator extends AbstractElement {
  getTemplate() {
    return `<form class='add-form' method='post'>
      <label class='visually-hidden' for='new-name'>Name</label>
      <input type='text' id='new-name' name='new-name' placeholder='enter name' required>
      <label class='visually-hidden' for='new-phone'>Phone</label>
      <input type='text' id='new-phone' name='new-phone' placeholder='enter phone +7xxxxxxxxxx or 8xxxxxxxxxx' required>
      <button class='add-form__btn' type='submit'>Create</button>
    </form>`;
  }
}
