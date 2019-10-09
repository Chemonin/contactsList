/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/*! exports provided: getCardElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCardElement", function() { return getCardElement; });
const getCardElement = function ({name, phone}, editState) {
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


/***/ }),

/***/ "./src/controllers/card-controller.js":
/*!********************************************!*\
  !*** ./src/controllers/card-controller.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardController; });
/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/card.js */ "./src/components/card.js");


class CardController {
  constructor(container, data, onDataChange, onChangeView) {
    this._data = data;
    this._container = container;
    this._cardEditFlag = true;
    this._onChangeView = onChangeView;
    this._onDataChange = onDataChange;
    this._cardView = Object(_components_card_js__WEBPACK_IMPORTED_MODULE_0__["getCardElement"])(data, !this._cardEditFlag);
    this._cardEdit = Object(_components_card_js__WEBPACK_IMPORTED_MODULE_0__["getCardElement"])(data, this._cardEditFlag);
    this.create();
  }

  create() {
    this._cardView.querySelector(`.card__edit-btn`).addEventListener(`click`, () => {
      this._container.replaceChild(this._cardEdit, this._cardView);
      this._onChangeView();
    });

    this._cardView.querySelector(`.card__delete-btn`).addEventListener(`click`, () => {
      this._onDataChange(null, this._data);
    });
    this._cardEdit.addEventListener(`submit`, (evt) => {
      evt.preventDefault();
      const formData = new FormData(this._cardEdit);
      const changes = {
        name: formData.get(`name`),
        phone: formData.get(`phone`),
      };
      this._onDataChange(changes, this._data);
    });
    this._cardEdit.querySelector(`.card-edit__name`).addEventListener(`change`, (evt) => {
      const re = new RegExp('^([\u0400-\u04FFa-zA-Z\-]){2,}$', 'gi');
      if(!re.test(evt.currentTarget.value)) {
        evt.currentTarget.setCustomValidity(`Please enter a name in Russian or English. Min length 2 symbols`);
      } else {
        evt.currentTarget.setCustomValidity(``);
      }
    });
    this._cardEdit.querySelector(`.card-edit__phone`).addEventListener(`change`, (evt) => {
      const re = new RegExp('^[\+]?([0-9\-]){2,}$', 'gi');
      if(!re.test(evt.currentTarget.value)) {
        evt.currentTarget.setCustomValidity(`number format: +Xnumber or 8number`);
      } else {
        evt.currentTarget.setCustomValidity(``);
      }
    });

    this._container.appendChild(this._cardView);
  }

  disableChange() {
    const deleteBtn = this._cardView.querySelector(`.card__delete-btn`);
    const editBtn = this._cardView.querySelector(`.card__edit-btn`);
    editBtn.setAttribute(`disabled`, true);
    deleteBtn.setAttribute(`disabled`, true);
  }
}


/***/ }),

/***/ "./src/controllers/list-controller.js":
/*!********************************************!*\
  !*** ./src/controllers/list-controller.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListController; });
/* harmony import */ var _card_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-controller.js */ "./src/controllers/card-controller.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");



class ListController {
  constructor(container, dataList) {
    this._container = container;
    this._dataList = dataList;
    this._onDataChange = this._onDataChange.bind(this);
    this._onChangeView = this._onChangeView.bind(this);
    this._watchers = [];
  }

  createContact(entryData) {
    this._onDataChange(entryData, null);
  }

  _renderList(contactsInfo) {
    this._container.innerHTML = ``;
    this._dataList.forEach((element) => this._renderContact(element));
  }

  _renderContact(contactData) {
      const cardController = new _card_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"](this._container, contactData, this._onDataChange, this._onChangeView);
      this._watchers.push(cardController.disableChange.bind(cardController));
  }

  _onSendError() {
    window.alert(`Conection error. Local data updated`);
    this._renderList(this._dataList);
  }

  _onSendSuccess() {
    window.alert(`Server data updated`);
    this._renderList(this._dataList);
  }

  _onDataChange(newData, oldData) {
    let index = null;
    if (!this._dataList) {
      this._dataList = []; // Необходимо при включении имитации режима работы с сервером.
    }
    if (this._dataList.length !== 0) {
      index = this._dataList.findIndex((item) => item === oldData);
    }
    if (newData === null) {
      this._dataList.splice(index, 1);
    } else if (oldData === null) {
      this._dataList.unshift(newData);
    } else {
      this._dataList[index] = newData;
    }
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["upload"])(this._onSendSuccess.bind(this), this._onSendError.bind(this), this._dataList);
  }

  _onChangeView() {
    this._watchers.forEach((watcher) => watcher());
  }

  init() {
    if (this._dataList) {
      this._dataList.forEach((element) => this._renderContact(element));
    }
  }
}


/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: dataList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataList", function() { return dataList; });
const NUMBER_OF_CARD = 5;

const names = [`Ivan`, `Petr`, `Oleg`, `Dmitriy`, `Alexander`];
const phones = [`89853332211`, `89034234300`, `+79301234567`, `89109019234`];

const getRandomElement = (element) => element[Math.floor(Math.random() * element.length)];
const getDataList = (count) => new Array(count).fill(``).map(createCardData);

const createCardData = () => ({
  name: getRandomElement(names),
  phone: getRandomElement(phones),
});

const dataList = getDataList(NUMBER_OF_CARD);


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _controllers_list_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/list-controller.js */ "./src/controllers/list-controller.js");




const container = document.querySelector(`.container`);
const table = document.querySelector(`.table`);
const newContact = document.querySelector(`.new-contact`);
const form = document.querySelector(`.add-form`);
let listController = null;

const useLocalData = () => {
  listController = new _controllers_list_controller_js__WEBPACK_IMPORTED_MODULE_2__["default"](table, _data_js__WEBPACK_IMPORTED_MODULE_0__["dataList"]);
  listController.init();
  window.alert('Conection error. Local data used');
}
const renderContacts = (data) => {
  window.alert('Server data used');
  listController = new _controllers_list_controller_js__WEBPACK_IMPORTED_MODULE_2__["default"](table, data);
  listController.init();
}
newContact.appendChild(form);
Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["download"])(renderContacts, useLocalData);

form.querySelector(`#new-name`).addEventListener(`change`, (evt) => {
  // вводитться только имя или фамилия целиком или через дефис(например, в случае двойного)
  const re = new RegExp('^([\u0400-\u04FFa-zA-Z\-]){2,}$', 'gi');
  if(!re.test(evt.currentTarget.value)) {
    evt.currentTarget.setCustomValidity(`Please enter a name in Russian or English. Min length 2 symbols`);
  } else {
    evt.currentTarget.setCustomValidity(``);
  }
});
form.querySelector(`#new-phone`).addEventListener(`change`, (evt) => {
  const re = new RegExp('^[\+]?([0-9\-]){2,}$', 'gi'); // условие без учета длины номера
  if(!re.test(evt.currentTarget.value)) {
    evt.currentTarget.setCustomValidity(`number format: +Xnumber or 8number`);
  } else {
    evt.currentTarget.setCustomValidity(``);
  }
});

form.addEventListener(`submit`, (evt) => {
  evt.preventDefault();
  const formData = new FormData(form);
  const entry = {
    name: formData.get(`new-name`),
    phone: formData.get(`new-phone`),
  };
  form.reset();
  listController.createContact(entry);
});


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: download, upload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "download", function() { return download; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upload", function() { return upload; });
const TIMEOUT_VALUE = 5000;
// URL - адрес заглушка для имитации работы с сервером.
// при замене значения 500 на 200 в URL данные будут загружаться с сервера
const URL = `https://httpbin.org/status/500`;
var LoadStatus = {
    OK: 200
  };

const download = (onSuccess, onError) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = `json`;
  xhr.addEventListener('load', function () {
      if (xhr.status === LoadStatus.OK) {
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
  xhr.open(`GET`, URL);
  xhr.send();
};

const upload = (onSuccess, onError, data) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function () {
      if (xhr.status === LoadStatus.OK) {
        onSuccess();
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
  xhr.open(`POST`, URL);
  xhr.send(data);
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map