export const getCardElement = function ({name, phone}, editState) {
  const shell = document.createElement(`div`);
  shell.innerHTML = editState ? `<form class='card-edit' method='post'>
    <div class='card-edit__info'>
      <label>Name<input class='card-edit__name' type='text' name='name' value='${name}' ></label>
      <label>Phone<input class='card-edit__phone' type='text' name='phone' value='${phone}' ></label>
    </div>
    <div class='card-edit__controls'>
      <button class='card-edit__save-btn' type='submit'>Save</button>
    </div>
  </form>` : `<article class='card'>
    <div class='card__info'>
      <p class='card__name'>${name}</p>
      <p class='card__phone'>${phone}</p>
    </div>
    <div class='card__controls'>
      <button class='card__delete-btn' type="reset">Delete</button>
      <button class='card__edit-btn' type='button'>Edit</button>
    </div>
  </article>`;
  return shell.firstChild;
}
