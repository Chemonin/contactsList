export const Position = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

export const render = (parent, child, position) => {
  switch (position) {
    case Position.AFTERBEGIN:
      parent.prepend(child);
      break;
    case Position.BEFOREEND:
      parent.append(child);
      break;
  }
};

export const unrender = (element) => {
  if (element) {
    element.remove();
  }
};
