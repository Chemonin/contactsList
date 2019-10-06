import {Server} from './data.js';
const TIMEOUT_VALUE = 5000;
var LoadStatus = {
    OK: 200
  };
export const Position = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
};

export const download = (onSuccess, onError) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = `json`;
  xhr.addEventListener('load', function () {
      if (xhr.status === LoadStatus.OK) {
        debugger;
        onSuccess(xhr.response);
      } else {
        onError();
      }
    });
  xhr.addEventListener('error', function () {
    onError();
  });
  xhr.addEventListener('timeout', function () {
    onError();
  });

  xhr.timeout = TIMEOUT_VALUE;
  xhr.open(`GET`, Server.URL_GET);
  xhr.send();
}

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
