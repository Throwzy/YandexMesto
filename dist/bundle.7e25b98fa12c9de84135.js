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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/Api */ \"./scripts/Api.js\");\n/* harmony import */ var _scripts_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/Card */ \"./scripts/Card.js\");\n/* harmony import */ var _scripts_CardList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/CardList */ \"./scripts/CardList.js\");\n/* harmony import */ var _scripts_FormValidator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/FormValidator */ \"./scripts/FormValidator.js\");\n/* harmony import */ var _scripts_Popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/Popup */ \"./scripts/Popup.js\");\n/* harmony import */ var _scripts_PopupImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/PopupImage */ \"./scripts/PopupImage.js\");\n/* harmony import */ var _scripts_UserInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/UserInfo */ \"./scripts/UserInfo.js\");\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/index.css */ \"./pages/index.css\");\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_pages_index_css__WEBPACK_IMPORTED_MODULE_7__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(function (){\r\n// const initialCards = [\r\n//   {\r\n//     name: 'Архыз',\r\n//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'\r\n//   },\r\n//   {\r\n//     name: 'Челябинская область',\r\n//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'\r\n//   },\r\n//   {\r\n//     name: 'Иваново',\r\n//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'\r\n//   },\r\n//   {\r\n//     name: 'Камчатка',\r\n//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'\r\n//   },\r\n//   {\r\n//     name: 'Холмогорский район',\r\n//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'\r\n//   },\r\n//   {\r\n//     name: 'Байкал',\r\n//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'\r\n//   },\r\n//   {\r\n//     name: 'Нургуш',\r\n//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg'\r\n//   },\r\n//   {\r\n//     name: 'Тулиновка',\r\n//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg'\r\n//   },\r\n//   {\r\n//     name: 'Остров Желтухина',\r\n//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg'\r\n//   },\r\n//   {\r\n//     name: 'Владивосток',\r\n//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg'\r\n//   }\r\n// ];\r\nconst formAddCard = document.forms.new;\r\nconst formUser = document.forms.editform;\r\nconst choosePicture = document.querySelector('.popup_images');\r\nconst chooseImage = document.querySelector('.popup__image');\r\nconst chooseCardImage = document.querySelector('.place-card__image');\r\nconst chooseClosePicture = document.querySelector('.popup__close-picture');\r\nconst getMyelements = document.getElementsByName('username');\r\nconst userInfo = document.querySelector('.user-info__name');\r\nconst userJob = document.querySelector('.user-info__job');\r\nconst userInfoInput = formUser.elements.username;\r\nconst userJobInput = formUser.elements.about;\r\nconst editPopup = document.querySelector('.edit-popup');\r\nconst popupSave = document.querySelector('.popup__save');\r\nconst likeSelector = document.querySelector('.place-card__like-icon');\r\nconst oneCard = document.querySelector('.place-card');\r\nconst mainClass = document.querySelector('.popup');\r\nconst formClass = document.querySelector('.popup_is-opened');\r\nconst ourButton = document.querySelector('.button');\r\nconst editButton = document.querySelector('.user-edit__button');\r\nconst infoButton = document.querySelector('.user-info__button');\r\nconst closeTab = document.querySelector('.popup__close');\r\nconst closeEdit = document.querySelector('.popup__close-edit');\r\nconst closeMyPlaceTab = document.querySelector('.popup__close-place');\r\nconst chooseContent = document.querySelector('.popup-place');\r\nconst list = document.querySelector('.places-list');\r\nconst popupContent = document.querySelector('.popup__content');\r\nconst button = document.querySelector('.button');\r\nconst addNewCardButton = formAddCard.querySelector('.popup__button');\r\nconst inputPlace = document.querySelector('.popup__input_type_name');\r\nconst inputUrl = document.querySelector('.popup__input_type_link-url');\r\n\r\nconst errorMessages = {\r\n  empty: 'Это обязательное поле',\r\n  wrongLength: 'Должно быть от 2 до 30 символов',\r\n  wrongUrl: 'Здесь должна быть ссылка',\r\n  wrongPattern: 'Введите данные в верном формате',\r\n};\r\n\r\nfunction createNewCard(name, link) {\r\n  return new _scripts_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name, link).create();\r\n}\r\n\r\nconst newList = new _scripts_CardList__WEBPACK_IMPORTED_MODULE_2__[\"default\"](list, createNewCard);\r\n// newList.render(initialCards);\r\n\r\nconst editProfileTab = new _scripts_Popup__WEBPACK_IMPORTED_MODULE_4__[\"default\"](editPopup);\r\nconst newPlaceTab = new _scripts_Popup__WEBPACK_IMPORTED_MODULE_4__[\"default\"](chooseContent);\r\n\r\nconst formEditValidator = new _scripts_FormValidator__WEBPACK_IMPORTED_MODULE_3__[\"default\"](editPopup);\r\nconst formCardValidator = new _scripts_FormValidator__WEBPACK_IMPORTED_MODULE_3__[\"default\"](chooseContent);\r\nconst pictureClass = new _scripts_PopupImage__WEBPACK_IMPORTED_MODULE_5__[\"default\"](choosePicture,chooseImage);\r\n\r\nconst api = new _scripts_Api__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n  baseUrl: 'https://nomoreparties.co/cohort12',\r\n  headers: {\r\n    'authorization': 'fd6a5b73-7bb7-4dfa-8ed7-e499c84151ec',\r\n    'Content-type': 'application/json'\r\n  }\r\n})\r\n\r\nconst userInfoBar = new _scripts_UserInfo__WEBPACK_IMPORTED_MODULE_6__[\"default\"](userInfo, userJob, userInfoInput, userJobInput, api);\r\n\r\napi.getInititalCards().then ((res) => {\r\n  newList.render(res)\r\n}).catch ((err) => {\r\n  console.log(err);\r\n})\r\n\r\napi.getProfile().then ((res) => {\r\n  userInfoBar.setUserInfo(res.name,res.about)\r\n  console.log(res.name)\r\n}).catch ((err) => {\r\n  console.log(err);\r\n})\r\n\r\n\r\n// const api = new Api({\r\n//   url: baseUrl,\r\n//   headers: {\r\n//     'authorization': 'fd6a5b73-7bb7-4dfa-8ed7-e499c84151ec',\r\n//     'Content-type': 'application/json'\r\n//   }\r\n// });\r\n\r\n// const renewProfileApi = new Api({\r\n//   url: 'https://praktikum.tk/cohort12/users/me',\r\n//   method: `PATCH`,\r\n//   headers: {\r\n//     'authorization': 'fd6a5b73-7bb7-4dfa-8ed7-e499c84151ec',\r\n//     'Content-type': 'application/json'\r\n//   }\r\n// });\r\n// renewProfileApi.renewProfile(userInfoInput.value,userJobInput.value).then ((res) => {\r\n//   console.log('Тест')\r\n  // userInfoBar.updateUserInfo(res.name,res.about)\r\n// })\r\n\r\n// fetch('https://praktikum.tk/cohort12/users/me', {\r\n//   method: 'PATCH',\r\n//   headers: {\r\n//     'authorization': 'fd6a5b73-7bb7-4dfa-8ed7-e499c84151ec',\r\n//     'Content-Type': 'application/json'\r\n//   },\r\n//   body: JSON.stringify({\r\n//     name: 'test',\r\n//     about: 'Physicist and Chemist'\r\n//   })\r\n// }).then ((res) => {\r\n//   return res.json()\r\n// }).then ((res) => {\r\n//   userInfoBar.updateUserInfo(res.name,res.about)\r\n// })\r\n\r\n// api.getProfile();\r\n\r\n// fetch('https://praktikum.tk/cohort12/cards', {\r\n//   headers: {\r\n//     authorization: 'fd6a5b73-7bb7-4dfa-8ed7-e499c84151ec',\r\n//     'Content-type': 'application/json'\r\n// }}).then ((res) => {\r\n//   return res.json()\r\n// }).then ((res) => {\r\n//   console.log(res);\r\n// })\r\n\r\nfunction closePicture(event) {\r\n  choosePicture.classList.remove('popup_is-opened');\r\n}\r\n\r\nlist.addEventListener('click', function (event) {\r\n  if (event.target.classList.contains('place-card__image')) {\r\n    pictureClass.openWide(event.target.style.backgroundImage.slice(5, -2));\r\n  }\r\n});\r\n\r\n// функция очистки формы\r\nfunction clearMyForm() {\r\n  const clearName = document.querySelector('.popup__input_type_name');\r\n  const clearUrl = document.querySelector('.popup__input_type_link-url');\r\n  clearName.value = \"\";\r\n  clearUrl.value = \"\";\r\n};\r\n\r\n// Функция сброса ошибок\r\nfunction clearErrors() {\r\n  const errorSearch = document.querySelectorAll('.error');\r\n  errorSearch.forEach(function (elem) {\r\n    elem.textContent = \"\";\r\n  });\r\n};\r\ncloseEdit.addEventListener('click', () => {\r\n  editProfileTab.close();\r\n  clearErrors();\r\n  clearMyForm();\r\n\r\n});\r\n\r\ncloseMyPlaceTab.addEventListener('click', () => {\r\n  newPlaceTab.close();\r\n  clearErrors();\r\n  clearMyForm();\r\n});\r\ninfoButton.addEventListener('click', () => {\r\n  newPlaceTab.open();\r\n});\r\n\r\neditButton.addEventListener('click', function () {\r\n  editProfileTab.open();\r\n  //userInfoBar.setUserInfo();\r\n});\r\n\r\nformEditValidator.setEventListeners();\r\n\r\nformUser.addEventListener('submit', function (event) {\r\n  event.preventDefault();\r\n\r\n  api.renewProfile(userInfoInput.value,userJobInput.value).then ((res) => {\r\n    userInfoBar.updateUserInfo(res.name, res.about);\r\n  }).then ((res) => {\r\n    /*\r\n      Можно лучше: можно написать в одном блоке then, здесь нет необходимости разбивать на несколько\r\n    */\r\n      editProfileTab.close()\r\n      clearErrors();\r\n      clearMyForm();\r\n  }).catch ((err) => {\r\n    console.log(err);\r\n  })\r\n});\r\n\r\nformCardValidator.setEventListeners();\r\n\r\nformAddCard.addEventListener('submit', function () {\r\n  event.preventDefault();\r\n  const formName = formAddCard.elements.name.value;\r\n  const formLink = formAddCard.elements.link.value;\r\n  newList.addCard(formName, formLink);\r\n  clearErrors();\r\n  clearMyForm();\r\n  newPlaceTab.close();\r\n});\r\nchooseClosePicture.addEventListener('click', closePicture);\r\n}());\r\n\r\n/*\r\n  Хорошая работа, класс Api создан, запросы на сервер выполняются. Но есть несколько замечаний:\r\n\r\n  Надо исправить:\r\n  + не создавать экземпляр класса Api для каждого запроса\r\n  + в конструктор класса Api передавать только базовый адрес сервера, а название\r\n    самого ендпоинта добавлять в методе\r\n  + не хватает обработки ошибок. В конце цепочки обработки промиса \r\n    должен быть блок catch обрабатывающий ошибку\r\n  + все изменения на странице должны происходить, только после того, как\r\n    сервер ответил подтверждением. В том числе и закрытие попапа\r\n  + если запрос выполнился с ошибкой должен возвращаться отклорненный промис \r\n\r\n  Можно лучше:\r\n  - проверка ответа сервера и преобразование из json\r\n    дублируется во всех методах класса Api, лучше вынести в отдельный метод\r\n  - использовать Promise.all для загрузки начальных данных\r\n*/\r\n\r\n/*\r\n  Отлично, критические замечания исправлены\r\n\r\n  Для закрепления полученных знаний советую сделать и оставшуюся часть задания.\r\n  Что бы реализовать оставшуюся часть задания необходимо разобраться с Promise.all\r\n  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/all\r\n  Т.к. для отрисовки карточек нужен id пользователя, поэтому отрисовать мы сможем их только\r\n  после полученния с сервера данных пользователя\r\n  Выглядит этот код примерно так:\r\n    Promise.all([     //в Promise.all передаем массив промисов которые нужно выполнить\r\n      this.api.getUserData(),\r\n      this.api.getInitialCards()\r\n    ])    \r\n      .then((values)=>{    //попадаем сюда когда оба промиса будут выполнены\r\n        const [userData, initialCards] = values;\r\n        ......................  //все данные получены, отрисовываем страницу\r\n      })\r\n      .catch((err)=>{     //попадаем сюда если один из промисов завершаться ошибкой\r\n        console.log(err);\r\n      })\r\n      \r\n\r\n  Если у Вас будет свободное время так же попробуйте освоить работу с сервером\r\n  применив async/await для работы с асинхронными запросами.\r\n  https://learn.javascript.ru/async-await\r\n  https://habr.com/ru/company/ruvds/blog/414373/\r\n  https://www.youtube.com/watch?v=SHiUyM_fFME\r\n  Это часто используется в реальной работе\r\n\r\n  Успехов в дальнейшем обучении!\r\n*/\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./pages/index.css":
/*!*************************!*\
  !*** ./pages/index.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./pages/index.css?");

/***/ }),

/***/ "./scripts/Api.js":
/*!************************!*\
  !*** ./scripts/Api.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Api; });\nclass Api {\r\n    constructor(config) {\r\n        this.url = config.url;\r\n        this.headers = config.headers;\r\n        this.method = config.method;\r\n        this.body = config.body;\r\n        this.baseUrl = config.baseUrl;\r\n    }\r\n    getInititalCards() {\r\n        return fetch(`${this.baseUrl}/cards`, {\r\n            headers: this.headers\r\n        }).then ((res) => {\r\n            /*\r\n                Можно лучше: проверка ответа сервера и преобразование из json\r\n                дублируется во всех методах класса Api, лучше вынести в отдельный метод:\r\n                    _getResponseData(res) {\r\n                        if (!res.ok) {\r\n                            return Promise.reject(`Ошибка: ${res.status}`); \r\n                        }\r\n                        return res.json();\r\n                    }\r\n                Подчеркивание в начале имени метода говорит о том, что метод является приватным, т.е.\r\n                не используется вне класса Api   \r\n            */\r\n            if (res.ok) {\r\n                return res.json()\r\n            }\r\n            return Promise.reject(`Ошибка: ${res.status}`);\r\n        })\r\n    }\r\n    getProfile() {\r\n        return fetch(`${this.baseUrl}/users/me`, {\r\n            headers: this.headers\r\n        }).then ((res) => {\r\n            if (res.ok) {\r\n                return res.json()\r\n            }\r\n            return Promise.reject(`Ошибка: ${res.status}`);\r\n        })\r\n    }\r\n\r\n    /*\r\n        Можно лучше: renewProfile => updateProfile\r\n    */\r\n    renewProfile(name,about) {\r\n        return fetch(`${this.baseUrl}/users/me`, {\r\n            method: 'PATCH',\r\n            headers: this.headers,\r\n            body: JSON.stringify({\r\n                name: name,\r\n                about: about\r\n            })\r\n        }).then ((res) => {\r\n            if (res.ok) {\r\n                return res.json()\r\n            }\r\n            return Promise.reject(`Ошибка: ${res.status}`);\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack:///./scripts/Api.js?");

/***/ }),

/***/ "./scripts/Card.js":
/*!*************************!*\
  !*** ./scripts/Card.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Card; });\nclass Card {\r\n    constructor(name,link) {\r\n    this.name = name;\r\n    this.link = link;\r\n    this.remove = this.remove.bind(this);\r\n    }\r\n    like() {\r\n        this.classList.toggle('place-card__like-icon_liked');\r\n    }\r\n    remove() {\r\n       this.newCard.querySelector(\".place-card__like-icon\").removeEventListener('click', this.like);\r\n       this.newCard.querySelector(\".place-card__delete-icon\").removeEventListener('click', this.remove);\r\n       this.newCard.remove();\r\n    }\r\n    create() {\r\n        const markup = `<div class=\"place-card\">\r\n        <div class=\"place-card__image\" style=\"background-image: url(https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg)\">\r\n          <button class=\"place-card__delete-icon\"></button>\r\n        </div>\r\n        <div class=\"place-card__description\">\r\n          <h3 class=\"place-card__name\">Камчатка</h3>\r\n          <button class=\"place-card__like-icon\"></button>\r\n        </div>\r\n      </div>`;\r\n        const element = document.createElement('div');\r\n        element.insertAdjacentHTML('afterbegin', markup);\r\n        const newCard = element.firstElementChild;\r\n        newCard.querySelector('.place-card__name').textContent = this.name;\r\n        newCard.querySelector('.place-card__image').style.backgroundImage = `url(${this.link})`;\r\n        this.newCard = newCard;\r\n        this.setListener();\r\n        return newCard;\r\n    }\r\n    setListener() {\r\n      this.newCard.querySelector(\".place-card__like-icon\").addEventListener('click', this.like);\r\n      this.newCard.querySelector(\".place-card__delete-icon\").addEventListener('click', this.remove);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./scripts/Card.js?");

/***/ }),

/***/ "./scripts/CardList.js":
/*!*****************************!*\
  !*** ./scripts/CardList.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CardList; });\nclass CardList {\r\n    constructor(container, createCard, api) {\r\n     this.container = container;\r\n     this.createCard = createCard;\r\n     this.api = api;\r\n    }\r\n    addCard(nameCard, linkCard) {\r\n        const card = this.createCard(nameCard, linkCard);\r\n        this.container.appendChild(card);\r\n    };\r\n    render(api) {\r\n        this.api = api;\r\n        this.api.forEach((card) => {\r\n            this.addCard(card.name, card.link);\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack:///./scripts/CardList.js?");

/***/ }),

/***/ "./scripts/FormValidator.js":
/*!**********************************!*\
  !*** ./scripts/FormValidator.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FormValidator; });\nclass FormValidator {\r\n  constructor(formV) {\r\n    this.formV = formV;\r\n    this.setEventListeners = this.setEventListeners.bind(this);\r\n  }\r\n\r\n  checkInputValidity(inputElement, errorMessageElement) {\r\n    if (inputElement.value.length === 0) {\r\n      errorMessageElement.textContent = 'Это обязательное поле';\r\n      return false;\r\n    } else if ((inputElement.value.length < 2 || inputElement.value.length > 30) && inputElement.type === \"text\") {\r\n      errorMessageElement.textContent = 'Должно быть от 2 до 30 символов';\r\n      return false;\r\n    } else if (inputElement.validity.typeMismatch && inputElement.type === 'url') {\r\n      errorMessageElement.textContent = 'Здесь должна быть ссылка!';\r\n      return false;\r\n    } else {\r\n      errorMessageElement.textContent = '';\r\n      return true;\r\n    }\r\n  }\r\n\r\n  setSubmitButtonState(valid) {\r\n    const button = this.formV.querySelector('button');\r\n    if (!valid) {\r\n      button.setAttribute('disabled', true);\r\n      button.classList.add('popup__button_invalid');\r\n    }\r\n    if (valid) {\r\n      button.removeAttribute('disabled', true);\r\n      button.classList.remove('popup__button_invalid');\r\n    }\r\n  }\r\n\r\n\r\n\r\n  setEventListeners() {\r\n    const inputs = [...this.formV.querySelectorAll('input')];\r\n    const button = this.formV.querySelector('button');\r\n    this.formV.addEventListener('input', (event) => {\r\n      const inputForValidation = event.target;\r\n      const error = event.target.nextElementSibling;\r\n      this.checkInputValidity(inputForValidation, error);\r\n      if (inputs.every((input) => input.validity.valid)) {\r\n        this.setSubmitButtonState(true);\r\n      } else {\r\n        this.setSubmitButtonState(false);\r\n      }\r\n    });\r\n  }\r\n};\n\n//# sourceURL=webpack:///./scripts/FormValidator.js?");

/***/ }),

/***/ "./scripts/Popup.js":
/*!**************************!*\
  !*** ./scripts/Popup.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Popup; });\nclass Popup {\r\n    constructor(popupContainer) {\r\n        this.popupContainer = popupContainer;\r\n    }\r\n\r\n    open() {\r\n        this.popupContainer.classList.add('popup_is-opened');\r\n    }\r\n\r\n    close() {\r\n        this.popupContainer.classList.remove('popup_is-opened');\r\n    }\r\n}\n\n//# sourceURL=webpack:///./scripts/Popup.js?");

/***/ }),

/***/ "./scripts/PopupImage.js":
/*!*******************************!*\
  !*** ./scripts/PopupImage.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PopupImage; });\nclass PopupImage {\r\n    constructor(popup,chooseImage) {\r\n        this.popup = popup;\r\n        this.chooseImage = chooseImage;\r\n    }\r\n    openWide(link) {\r\n        this.popup.classList.add(\"popup_is-opened\");\r\n        this.chooseImage.src = `${link}`;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./scripts/PopupImage.js?");

/***/ }),

/***/ "./scripts/UserInfo.js":
/*!*****************************!*\
  !*** ./scripts/UserInfo.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return UserInfo; });\nclass UserInfo {\r\n    constructor(elementName, elementAbout, elementNameEdit, elementAboutEdit, api) {\r\n        this.elementName = elementName;\r\n        this.elementAbout = elementAbout;\r\n        this.elementNameEdit = elementNameEdit;\r\n        this.elementAboutEdit = elementAboutEdit;\r\n        this.api = api;\r\n        this.name = api.name;\r\n        this.about = api.about;\r\n    }\r\n\r\n    setUserInfo(elementNameEdit, elementAboutEdit) {\r\n        this.elementName.textContent = elementNameEdit;\r\n        this.elementAbout.textContent = elementAboutEdit;\r\n        this.elementNameEdit.value = elementNameEdit;\r\n        this.elementAboutEdit.value = elementAboutEdit;\r\n    }\r\n\r\n    updateUserInfo(elementNameEdit, elementAboutEdit) {\r\n        this.elementName.textContent = this.elementNameEdit.value;\r\n        this.elementAbout.textContent = this.elementAboutEdit.value;\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./scripts/UserInfo.js?");

/***/ })

/******/ });