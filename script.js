/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Button.js":
/*!**************************!*\
  !*** ./src/js/Button.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Button = /*#__PURE__*/function () {
  function Button(data, combination) {
    _classCallCheck(this, Button);

    this.elem = document.createElement('div');
    this["class"] = 'button';
    this.classElem = data.code.toLowerCase();
    this.combination = combination;
    this.data = data[combination]; // console.log(Object.keys(data));
  }

  _createClass(Button, [{
    key: "appendTo",
    value: function appendTo(parent) {
      // console.log(this.data);
      this.elem.innerHTML = this.data;
      this.elem.classList.add(this["class"]);
      this.elem.classList.add(this.classElem);
      parent.appendChild(this.elem);
    }
  }]);

  return Button;
}();

/***/ }),

/***/ "./src/js/ButtonsRow.js":
/*!******************************!*\
  !*** ./src/js/ButtonsRow.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonsRow": () => (/* binding */ ButtonsRow)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ButtonsRow = /*#__PURE__*/function () {
  function ButtonsRow() {
    _classCallCheck(this, ButtonsRow);

    this.elem = document.createElement('div');
    this["class"] = 'buttonsRow';
  }

  _createClass(ButtonsRow, [{
    key: "appendTo",
    value: function appendTo(parent) {
      this.elem.classList.add(this["class"]);
      parent.appendChild(this.elem);
    }
  }]);

  return ButtonsRow;
}();

/***/ }),

/***/ "./src/js/Data.js":
/*!************************!*\
  !*** ./src/js/Data.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Data": () => (/* binding */ Data)
/* harmony export */ });
var Data = [[{
  code: 'Backquote',
  key: '`',
  keyCode: '192',
  shift: '~',
  ru: 'ё',
  shiftRu: 'Ё'
}, {
  code: 'Digit1',
  key: '1',
  keyCode: '49',
  shift: '!',
  ru: '1',
  shiftRu: '!'
}, {
  code: 'Digit2',
  key: '2',
  keyCode: '50',
  shift: '@',
  shiftRu: '"',
  ru: '2'
}, {
  code: 'Digit3',
  key: '3',
  keyCode: '51',
  shift: '#',
  shiftRu: '№',
  ru: '3'
}, {
  code: 'Digit4',
  key: '4',
  keyCode: '52',
  shift: '$',
  shiftRu: ';',
  ru: '4'
}, {
  code: 'Digit5',
  key: '5',
  keyCode: '53',
  shift: '%',
  ru: '5',
  shiftRu: '%'
}, {
  code: 'Digit6',
  key: '6',
  keyCode: '54',
  shift: '^',
  shiftRu: ':',
  ru: '6'
}, {
  code: 'Digit7',
  key: '7',
  keyCode: '55',
  shift: '&',
  shiftRu: '?',
  ru: '7'
}, {
  code: 'Digit8',
  key: '8',
  keyCode: '56',
  shift: '*',
  ru: '8',
  shiftRu: '*'
}, {
  code: 'Digit9',
  key: '9',
  keyCode: '57',
  shift: '(',
  ru: '9',
  shiftRu: '('
}, {
  code: 'Digit0',
  key: '0',
  keyCode: '48',
  shift: ')',
  ru: '0',
  shiftRu: ')'
}, {
  code: 'Minus',
  key: '-',
  keyCode: '189',
  shift: '_',
  ru: '-',
  shiftRu: '_'
}, {
  code: 'Equal',
  key: '=',
  keyCode: '187',
  shift: '+',
  ru: '=',
  shiftRu: '+'
}, {
  code: 'Backspace',
  key: 'Backspace',
  keyCode: '8',
  shift: 'Backspace',
  ru: 'Backspace',
  shiftRu: 'Backspace'
}], [{
  code: 'Tab',
  key: 'Tab',
  keyCode: '9',
  shift: 'Tab',
  ru: 'Tab',
  shiftRu: 'Tab'
}, {
  code: 'KeyQ',
  key: 'q',
  keyCode: '81',
  shift: 'Q',
  ru: 'й',
  shiftRu: 'Й'
}, {
  code: 'KeyW',
  key: 'w',
  keyCode: '87',
  shift: 'W',
  ru: 'ц',
  shiftRu: 'Ц'
}, {
  code: 'KeyE',
  key: 'e',
  keyCode: '69',
  shift: 'E',
  ru: 'у',
  shiftRu: 'У'
}, {
  code: 'KeyR',
  key: 'r',
  keyCode: '82',
  shift: 'R',
  ru: 'к',
  shiftRu: 'К'
}, {
  code: 'KeyT',
  key: 't',
  keyCode: '84',
  shift: 'T',
  ru: 'е',
  shiftRu: 'Е'
}, {
  code: 'KeyY',
  key: 'y',
  keyCode: '89',
  shift: 'Y',
  ru: 'н',
  shiftRu: 'Н'
}, {
  code: 'KeyU',
  key: 'u',
  keyCode: '85',
  shift: 'U',
  ru: 'г',
  shiftRu: 'Г'
}, {
  code: 'KeyI',
  key: 'i',
  keyCode: '73',
  shift: 'I',
  ru: 'ш',
  shiftRu: 'Ш'
}, {
  code: 'KeyO',
  key: 'o',
  keyCode: '111',
  shift: 'O',
  ru: 'щ',
  shiftRu: 'Щ'
}, {
  code: 'KeyP',
  key: 'p',
  keyCode: '80',
  shift: 'P',
  ru: 'з',
  shiftRu: 'З'
}, {
  code: 'BracketLeft',
  key: '[',
  keyCode: '219',
  shift: '{',
  ru: 'х',
  shiftRu: 'Х'
}, {
  code: 'BracketRight',
  key: ']',
  keyCode: '221',
  shift: '}',
  ru: 'ъ',
  shiftRu: 'Ъ'
}, {
  code: 'Backslash',
  key: '\\',
  keyCode: '220',
  shift: '|',
  shiftRu: '/',
  ru: '\\'
}, {
  code: 'Delete',
  key: 'Delete',
  keyCode: '46',
  shift: 'Delete',
  ru: 'Delete',
  shiftRu: 'Delete'
}], [{
  code: 'CapsLock',
  key: 'CapsLock',
  keyCode: '20',
  shift: 'CapsLock',
  ru: 'CapsLock',
  shiftRu: 'CapsLock'
}, {
  code: 'KeyA',
  key: 'a',
  keyCode: '65',
  shift: 'A',
  ru: 'ф',
  shiftRu: 'Ф'
}, {
  code: 'KeyS',
  key: 's',
  keyCode: '83',
  shift: 'S',
  ru: 'ы',
  shiftRu: 'Ы'
}, {
  code: 'KeyD',
  key: 'd',
  keyCode: '68',
  shift: 'D',
  ru: 'в',
  shiftRu: 'В'
}, {
  code: 'KeyF',
  key: 'f',
  keyCode: '70',
  shift: 'F',
  ru: 'а',
  shiftRu: 'А'
}, {
  code: 'KeyG',
  key: 'g',
  keyCode: '71',
  shift: 'G',
  ru: 'п',
  shiftRu: 'П'
}, {
  code: 'KeyH',
  key: 'h',
  keyCode: '72',
  shift: 'H',
  ru: 'р',
  shiftRu: 'Р'
}, {
  code: 'KeyJ',
  key: 'j',
  keyCode: '74',
  shift: 'J',
  ru: 'о',
  shiftRu: 'О'
}, {
  code: 'KeyK',
  key: 'k',
  keyCode: '75',
  shift: 'K',
  ru: 'л',
  shiftRu: 'Л'
}, {
  code: 'KeyL',
  key: 'l',
  keyCode: '76',
  shift: 'L',
  ru: 'д',
  shiftRu: 'Д'
}, {
  code: 'Semicolon',
  key: ';',
  keyCode: '186',
  shift: ':',
  ru: 'ж',
  shiftRu: 'Ж'
}, {
  code: 'Quote',
  key: "'",
  keyCode: '222',
  shift: '"',
  ru: 'э',
  shiftRu: 'Э'
}, {
  code: 'Enter',
  key: 'Enter',
  keyCode: '13',
  shift: 'Enter',
  ru: 'Enter',
  shiftRu: 'Enter'
}], [{
  code: 'ShiftLeft',
  key: 'Shift',
  keyCode: '16',
  shift: 'Shift',
  ru: 'Shift',
  shiftRu: 'Shift'
}, {
  code: 'KeyZ',
  key: 'z',
  keyCode: '90',
  shift: 'Z',
  ru: 'я',
  shiftRu: 'Я'
}, {
  code: 'KeyX',
  key: 'x',
  keyCode: '88',
  shift: 'X',
  ru: 'ч',
  shiftRu: 'Ч'
}, {
  code: 'KeyC',
  key: 'c',
  keyCode: '67',
  shift: 'C',
  ru: 'с',
  shiftRu: 'С'
}, {
  code: 'KeyV',
  key: 'v',
  keyCode: '86',
  shift: 'V',
  ru: 'м',
  shiftRu: 'М'
}, {
  code: 'KeyB',
  key: 'b',
  keyCode: '66',
  shift: 'B',
  ru: 'и',
  shiftRu: 'И'
}, {
  code: 'KeyN',
  key: 'n',
  keyCode: '78',
  shift: 'N',
  ru: 'т',
  shiftRu: 'Т'
}, {
  code: 'KeyM',
  key: 'm',
  keyCode: '77',
  shift: 'M',
  ru: 'ь',
  shiftRu: 'Ь'
}, {
  code: 'Comma',
  key: ',',
  keyCode: '188',
  shift: '<',
  ru: 'б',
  shiftRu: 'Б'
}, {
  code: 'Period',
  key: '.',
  keyCode: '190',
  shift: '>',
  ru: 'ю',
  shiftRu: 'Ю'
}, {
  code: 'Slash',
  key: '/',
  keyCode: '191',
  shift: '?',
  ru: '.',
  shiftRu: ','
}, {
  code: 'ArrowUp',
  key: '▲',
  keyCode: '38',
  shift: '▲',
  ru: '▲',
  shiftRu: '▲'
}, {
  code: 'ShiftRight',
  key: 'Shift',
  keyCode: '16',
  shift: 'Shift',
  ru: 'Shift',
  shiftRu: 'Shift'
}], [{
  code: 'ControlLeft',
  key: 'Ctrl',
  keyCode: '17',
  shift: 'Ctrl',
  ru: 'Ctrl',
  shiftRu: 'Ctrl'
}, {
  code: 'MetaLeft',
  key: 'Win',
  keyCode: '91',
  shift: 'Win',
  ru: 'Win',
  shiftRu: 'Win'
}, {
  code: 'AltLeft',
  key: 'Alt',
  keyCode: '18',
  shift: 'Alt',
  ru: 'Alt',
  shiftRu: 'Alt'
}, {
  code: 'Space',
  key: ' ',
  keyCode: '32',
  shift: ' ',
  ru: ' ',
  shiftRu: ' '
}, {
  code: 'AltRight',
  key: 'Alt',
  keyCode: '18',
  shift: 'Alt',
  ru: 'Alt',
  shiftRu: 'Alt'
}, {
  code: 'ControlRight',
  key: 'Ctrl',
  keyCode: '17',
  shift: 'Ctrl',
  ru: 'Ctrl',
  shiftRu: 'Ctrl'
}, // { code: 'MetaRight', key: 'Meta', keyCode: '92' },
{
  code: 'ArrowLeft',
  key: '◄',
  keyCode: '37',
  shift: '◄',
  ru: '◄',
  shiftRu: '◄'
}, {
  code: 'ArrowDown',
  key: '▼',
  keyCode: '40',
  shift: '▼',
  ru: '▼',
  shiftRu: '▼'
}, {
  code: 'ArrowRight',
  key: '►',
  keyCode: '39',
  shift: '►',
  ru: '►',
  shiftRu: '►'
}]];

/***/ }),

/***/ "./src/js/Keybord.js":
/*!***************************!*\
  !*** ./src/js/Keybord.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Keyboard": () => (/* binding */ Keyboard)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Keyboard = /*#__PURE__*/function () {
  function Keyboard() {
    _classCallCheck(this, Keyboard);

    this.elem = document.createElement('div');
    this["class"] = 'keyboard';
  }

  _createClass(Keyboard, [{
    key: "appendTo",
    value: function appendTo(parent) {
      this.elem.classList.add(this["class"]);
      parent.appendChild(this.elem);
    }
  }]);

  return Keyboard;
}();

/***/ }),

/***/ "./src/js/TextArea.js":
/*!****************************!*\
  !*** ./src/js/TextArea.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextArea": () => (/* binding */ TextArea)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var TextArea = /*#__PURE__*/function () {
  function TextArea() {
    _classCallCheck(this, TextArea);

    this.div = document.createElement('div');
    this.divWrapClass = 'textarea__wrapper';
    this.elem = document.createElement('textarea');
    this["class"] = 'textarea';
  }

  _createClass(TextArea, [{
    key: "appendTo",
    value: function appendTo(parent) {
      this.div.classList.add(this.divWrapClass);
      this.elem.classList.add(this["class"]);
      this.div.append(this.elem);
      parent.appendChild(this.div);
    }
  }]);

  return TextArea;
}();

/***/ }),

/***/ "./src/js/TextDiv.js":
/*!***************************!*\
  !*** ./src/js/TextDiv.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextDiv": () => (/* binding */ TextDiv)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var TextDiv = /*#__PURE__*/function () {
  function TextDiv() {
    _classCallCheck(this, TextDiv);

    this.elem = document.createElement('div');
    this.a = document.createElement('a');
    this["class"] = 'textDiv';
  }

  _createClass(TextDiv, [{
    key: "appendTo",
    value: function appendTo(parent) {
      this.elem.innerHTML = 'Ссылка на PR: ';
      this.a.href = 'https://github.com/eloctro/virtual-keyboard/pull/2';
      this.a.target = "_blank";
      this.a.innerHTML = 'https://github.com/eloctro/virtual-keyboard/pull/2';
      this.elem.append(this.a);
      this.elem.classList.add(this["class"]);
      parent.appendChild(this.elem);
    }
  }]);

  return TextDiv;
}();

/***/ }),

/***/ "./src/js/renderButtons.js":
/*!*********************************!*\
  !*** ./src/js/renderButtons.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderButtons": () => (/* binding */ renderButtons)
/* harmony export */ });
/* harmony import */ var _ButtonsRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonsRow */ "./src/js/ButtonsRow.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/js/Button.js");
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Data */ "./src/js/Data.js");



function renderButtons(parent, combination) {
  var _loop = function _loop(rows) {
    new _ButtonsRow__WEBPACK_IMPORTED_MODULE_0__.ButtonsRow().appendTo(parent);
    var buttonsRow = document.querySelectorAll('.buttonsRow');
    _Data__WEBPACK_IMPORTED_MODULE_2__.Data[rows].forEach(function (elem) {
      new _Button__WEBPACK_IMPORTED_MODULE_1__.Button(elem, combination).appendTo(buttonsRow[buttonsRow.length - 1]);
    });
  };

  for (var rows = 0; rows < 5; rows += 1) {
    _loop(rows);
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_TextDiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/TextDiv */ "./src/js/TextDiv.js");
/* harmony import */ var _js_TextArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/TextArea */ "./src/js/TextArea.js");
/* harmony import */ var _js_Keybord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/Keybord */ "./src/js/Keybord.js");
/* harmony import */ var _js_renderButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/renderButtons */ "./src/js/renderButtons.js");




var body = document.querySelector('body');
var combination = 'key';
new _js_TextDiv__WEBPACK_IMPORTED_MODULE_0__.TextDiv().appendTo(body);
new _js_TextArea__WEBPACK_IMPORTED_MODULE_1__.TextArea().appendTo(body);
new _js_Keybord__WEBPACK_IMPORTED_MODULE_2__.Keyboard().appendTo(body);
var keyboard = document.querySelector('.keyboard');
var textArea = document.querySelector('.textarea');
(0,_js_renderButtons__WEBPACK_IMPORTED_MODULE_3__.renderButtons)(keyboard, combination);

function handleDown(e) {
  // console.log(e.keyCode);
  var butDown = document.querySelector(".".concat(e.code.toLowerCase()));

  if ( // !butDown.classList.contains('shiftleft') &&
  // !butDown.classList.contains('altleft') &&
  !butDown.classList.contains('tab')) {
    butDown.classList.add('active');
  }

  if (e.ctrlKey && e.altKey) {
    if (combination === 'ru') {
      combination = 'key';
      keyboard.innerHTML = '';
      (0,_js_renderButtons__WEBPACK_IMPORTED_MODULE_3__.renderButtons)(keyboard, combination);
    } else if (combination === 'key') {
      combination = 'ru';
      keyboard.innerHTML = '';
      (0,_js_renderButtons__WEBPACK_IMPORTED_MODULE_3__.renderButtons)(keyboard, combination);
    } else if (combination === 'shift') {
      combination = 'shiftRu';
      keyboard.innerHTML = '';
      (0,_js_renderButtons__WEBPACK_IMPORTED_MODULE_3__.renderButtons)(keyboard, combination);
    } else if (combination === 'shiftRu') {
      combination = 'shift';
      keyboard.innerHTML = '';
      (0,_js_renderButtons__WEBPACK_IMPORTED_MODULE_3__.renderButtons)(keyboard, combination);
    }
  } else if (e.shiftKey || e.keyCode === 20) {
    if (combination === 'ru') {
      combination = 'shiftRu';
      keyboard.innerHTML = '';
      (0,_js_renderButtons__WEBPACK_IMPORTED_MODULE_3__.renderButtons)(keyboard, combination);
      var caps = document.querySelector('capslock');
      caps.classList.add('.active');
    } else if (combination === 'shiftRu') {
      combination = 'ru';
      keyboard.innerHTML = '';
      (0,_js_renderButtons__WEBPACK_IMPORTED_MODULE_3__.renderButtons)(keyboard, combination);
    } else if (combination === 'key') {
      combination = 'shift';
      keyboard.innerHTML = '';
      (0,_js_renderButtons__WEBPACK_IMPORTED_MODULE_3__.renderButtons)(keyboard, combination);
    } else if (combination === 'shift') {
      combination = 'key';
      keyboard.innerHTML = '';
      (0,_js_renderButtons__WEBPACK_IMPORTED_MODULE_3__.renderButtons)(keyboard, combination);
    }
  }
}

function handleUp(e) {
  var butDown = document.querySelector(".".concat(e.code.toLowerCase()));
  butDown.classList.remove('active'); // console.log(textArea.value);
}

body.onkeydown = handleDown;
body.onkeyup = handleUp;

function btnClick(event) {
  var arrBtnSpecial = ['Tab', 'CapsLock', 'Shift', 'Ctrl', 'Win', 'Alt', 'Backspace', 'Delete', 'Enter'];
  var btn = event.target.closest('.button');

  if (!arrBtnSpecial.includes(btn.textContent)) {
    textArea.value += btn.textContent;
  }
}

keyboard.addEventListener('click', btnClick);
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEVBQUUsSUFIWDtFQUlFQyxLQUFLLEVBQUUsR0FKVDtFQUtFRSxPQUFPLEVBQUUsR0FMWDtFQU1FRCxFQUFFLEVBQUU7QUFOTixDQWpERixFQXlERTtFQUNFWixJQUFJLEVBQUUsUUFEUjtFQUVFUyxHQUFHLEVBQUUsR0FGUDtFQUdFQyxPQUFPLEVBQUUsSUFIWDtFQUlFQyxLQUFLLEVBQUUsR0FKVDtFQUtFRSxPQUFPLEVBQUUsR0FMWDtFQU1FRCxFQUFFLEVBQUU7QUFOTixDQXpERixFQWlFRTtFQUNFWixJQUFJLEVBQUUsUUFEUjtFQUVFUyxHQUFHLEVBQUUsR0FGUDtFQUdFQyxPQUFPLEVBQUUsSUFIWDtFQUlFQyxLQUFLLEVBQUUsR0FKVDtFQUtFQyxFQUFFLEVBQUUsR0FMTjtFQU1FQyxPQUFPLEVBQUU7QUFOWCxDQWpFRixFQXlFRTtFQUNFYixJQUFJLEVBQUUsUUFEUjtFQUVFUyxHQUFHLEVBQUUsR0FGUDtFQUdFQyxPQUFPLEVBQUUsSUFIWDtFQUlFQyxLQUFLLEVBQUUsR0FKVDtFQUtFQyxFQUFFLEVBQUUsR0FMTjtFQU1FQyxPQUFPLEVBQUU7QUFOWCxDQXpFRixFQWlGRTtFQUNFYixJQUFJLEVBQUUsUUFEUjtFQUVFUyxHQUFHLEVBQUUsR0FGUDtFQUdFQyxPQUFPLEVBQUUsSUFIWDtFQUlFQyxLQUFLLEVBQUUsR0FKVDtFQUtFQyxFQUFFLEVBQUUsR0FMTjtFQU1FQyxPQUFPLEVBQUU7QUFOWCxDQWpGRixFQXlGRTtFQUNFYixJQUFJLEVBQUUsT0FEUjtFQUVFUyxHQUFHLEVBQUUsR0FGUDtFQUdFQyxPQUFPLEVBQUUsS0FIWDtFQUlFQyxLQUFLLEVBQUUsR0FKVDtFQUtFQyxFQUFFLEVBQUUsR0FMTjtFQU1FQyxPQUFPLEVBQUU7QUFOWCxDQXpGRixFQWlHRTtFQUNFYixJQUFJLEVBQUUsT0FEUjtFQUVFUyxHQUFHLEVBQUUsR0FGUDtFQUdFQyxPQUFPLEVBQUUsS0FIWDtFQUlFQyxLQUFLLEVBQUUsR0FKVDtFQUtFQyxFQUFFLEVBQUUsR0FMTjtFQU1FQyxPQUFPLEVBQUU7QUFOWCxDQWpHRixFQXlHRTtFQUNFYixJQUFJLEVBQUUsV0FEUjtFQUVFUyxHQUFHLEVBQUUsV0FGUDtFQUdFQyxPQUFPLEVBQUUsR0FIWDtFQUlFQyxLQUFLLEVBQUUsV0FKVDtFQUtFQyxFQUFFLEVBQUUsV0FMTjtFQU1FQyxPQUFPLEVBQUU7QUFOWCxDQXpHRixDQURrQixFQW1IbEIsQ0FDRTtFQUNFYixJQUFJLEVBQUUsS0FEUjtFQUVFUyxHQUFHLEVBQUUsS0FGUDtFQUdFQyxPQUFPLEVBQUUsR0FIWDtFQUlFQyxLQUFLLEVBQUUsS0FKVDtFQUtFQyxFQUFFLEVBQUUsS0FMTjtFQU1FQyxPQUFPLEVBQUU7QUFOWCxDQURGLEVBU0U7RUFDRWIsSUFBSSxFQUFFLE1BRFI7RUFFRVMsR0FBRyxFQUFFLEdBRlA7RUFHRUMsT0FBTyxFQUFFLElBSFg7RUFJRUMsS0FBSyxFQUFFLEdBSlQ7RUFLRUMsRUFBRSxFQUFFLEdBTE47RUFNRUMsT0FBTyxFQUFFO0FBTlgsQ0FURixFQWlCRTtFQUNFYixJQUFJLEVBQUUsTUFEUjtFQUVFUyxHQUFHLEVBQUUsR0FGUDtFQUdFQyxPQUFPLEVBQUUsSUFIWDtFQUlFQyxLQUFLLEVBQUUsR0FKVDtFQUtFQyxFQUFFLEVBQUUsR0FMTjtFQU1FQyxPQUFPLEVBQUU7QUFOWCxDQWpCRixFQXlCRTtFQUNFYixJQUFJLEVBQUUsTUFEUjtFQUVFUyxHQUFHLEVBQUUsR0FGUDtFQUdFQyxPQUFPLEVBQUUsSUFIWDtFQUlFQyxLQUFLLEVBQUUsR0FKVDtFQUtFQyxFQUFFLEVBQUUsR0FMTjtFQU1FQyxPQUFPLEVBQUU7QUFOWCxDQXpCRixFQWlDRTtFQUNFYixJQUFJLEVBQUUsTUFEUjtFQUVFUyxHQUFHLEVBQUUsR0FGUDtFQUdFQyxPQUFPLEVBQUUsSUFIWDtFQUlFQyxLQUFLLEVBQUUsR0FKVDtFQUtFQyxFQUFFLEVBQUUsR0FMTjtFQU1FQyxPQUFPLEVBQUU7QUFOWCxDQWpDRixFQXlDRTtFQUNFYixJQUFJLEVBQUUsTUFEUjtFQUVFUyxHQUFHLEVBQUUsR0FGUDtFQUdFQyxPQUFPLEVBQUUsSUFIWDtFQUlFQyxLQUFLLEVBQUUsR0FKVDtFQUtFQyxFQUFFLEVBQUUsR0FMTjtFQU1FQyxPQUFPLEVBQUU7QUFOWCxDQXpDRixFQWlERTtFQUNFYixJQUFJLEVBQUUsTUFEUjtFQUVFUyxHQUFHLEVBQUUsR0FGUDtFQUdFQyxPQUFPLEVBQUUsSUFIWDtFQUlFQyxLQUFLLEVBQUUsR0FKVDtFQUtFQyxFQUFFLEVBQUUsR0FMTjtFQU1FQyxPQUFPLEVBQUU7QUFOWCxDQWpERixFQXlERTtFQUNFYixJQUFJLEVBQUUsTUFEUjtFQUVFUyxHQUFHLEVBQUUsR0FGUDtFQUdFQyxPQUFPLEVBQUUsSUFIWDtFQUlFQyxLQUFLLEVBQUUsR0FKVDtFQUtFQyxFQUFFLEVBQUUsR0FMTjtFQU1FQyxPQUFPLEVBQUU7QUFOWCxDQXpERixFQWlFRTtFQUNFYixJQUFJLEVBQUUsTUFEUjtFQUVFUyxHQUFHLEVBQUUsR0FGUDtFQUdFQyxPQUFPLEVBQUUsSUFIWDtFQUlFQyxLQUFLLEVBQUUsR0FKVDtFQUtFQyxFQUFFLEVBQUUsR0FMTjtFQU1FQyxPQUFPLEVBQUU7QUFOWCxDQWpFRixFQXlFRTtFQUNFYixJQUFJLEVBQUUsTUFEUjtFQUVFUyxHQUFHLEVBQUUsR0FGUDtFQUdFQyxPQUFPLEVBQUUsS0FIWDtFQUlFQyxLQUFLLEVBQUUsR0FKVDtFQUtFQyxFQUFFLEVBQUUsR0FMTjtFQU1FQyxPQUFPLEVBQUU7QUFOWCxDQXpFRixFQWlGRTtFQUNFYixJQUFJLEVBQUUsTUFEUjtFQUVFUyxHQUFHLEVBQUUsR0FGUDtFQUdFQyxPQUFPLEVBQUUsSUFIWDtFQUlFQyxLQUFLLEVBQUUsR0FKVDtFQUtFQyxFQUFFLEVBQUUsR0FMTjtFQU1FQyxPQUFPLEVBQUU7QUFOWCxDQWpGRixFQXlGRTtFQUNFYixJQUFJLEVBQUUsYUFEUjtFQUVFUyxHQUFHLEVBQUUsR0FGUDtFQUdFQyxPQUFPLEVBQUUsS0FIWDtFQUlFQyxLQUFLLEVBQUUsR0FKVDtFQUtFQyxFQUFFLEVBQUUsR0FMTjtFQU1FQyxPQUFPLEVBQUU7QUFOWCxDQXpGRixFQWlHRTtFQUNFYixJQUFJLEVBQUUsY0FEUjtFQUVFUyxHQUFHLEVBQUUsR0FGUDtFQUdFQyxPQUFPLEVBQUUsS0FIWDtFQUlFQyxLQUFLLEVBQUUsR0FKVDtFQUtFQyxFQUFFLEVBQUUsR0FMTjtFQU1FQyxPQUFPLEVBQUU7QUFOWCxDQWpHRixFQXlHRTtFQUNFYixJQUFJLEVBQUUsV0FEUjtFQUVFUyxHQUFHLEVBQUUsSUFGUDtFQUdFQyxPQUFPLEVBQUUsS0FIWDtFQUlFQyxLQUFLLEVBQUUsR0FKVDtFQUtFRSxPQUFPLEVBQUUsR0FMWDtFQU1FRCxFQUFFLEVBQUU7QUFOTixDQXpHRixFQWlIRTtFQUNFWixJQUFJLEVBQUUsUUFEUjtFQUVFUyxHQUFHLEVBQUUsUUFGUDtFQUdFQyxPQUFPLEVBQUUsSUFIWDtFQUlFQyxLQUFLLEVBQUUsUUFKVDtFQUtFQyxFQUFFLEVBQUUsUUFMTjtFQU1FQyxPQUFPLEVBQUU7QUFOWCxDQWpIRixDQW5Ia0IsRUE2T2xCLENBQ0U7RUFDRWIsSUFBSSxFQUFFLFVBRFI7RUFFRVMsR0FBRyxFQUFFLFVBRlA7RUFHRUMsT0FBTyxFQUFFLElBSFg7RUFJRUMsS0FBSyxFQUFFLFVBSlQ7RUFLRUMsRUFBRSxFQUFFLFVBTE47RUFNRUMsT0FBTyxFQUFFO0FBTlgsQ0FERixFQVNFO0VBQ0ViLElBQUksRUFBRSxNQURSO0VBRUVTLEdBQUcsRUFBRSxHQUZQO0VBR0VDLE9BQU8sRUFBRSxJQUhYO0VBSUVDLEtBQUssRUFBRSxHQUpUO0VBS0VDLEVBQUUsRUFBRSxHQUxOO0VBTUVDLE9BQU8sRUFBRTtBQU5YLENBVEYsRUFpQkU7RUFDRWIsSUFBSSxFQUFFLE1BRFI7RUFFRVMsR0FBRyxFQUFFLEdBRlA7RUFHRUMsT0FBTyxFQUFFLElBSFg7RUFJRUMsS0FBSyxFQUFFLEdBSlQ7RUFLRUMsRUFBRSxFQUFFLEdBTE47RUFNRUMsT0FBTyxFQUFFO0FBTlgsQ0FqQkYsRUF5QkU7RUFDRWIsSUFBSSxFQUFFLE1BRFI7RUFFRVMsR0FBRyxFQUFFLEdBRlA7RUFHRUMsT0FBTyxFQUFFLElBSFg7RUFJRUMsS0FBSyxFQUFFLEdBSlQ7RUFLRUMsRUFBRSxFQUFFLEdBTE47RUFNRUMsT0FBTyxFQUFFO0FBTlgsQ0F6QkYsRUFpQ0U7RUFDRWIsSUFBSSxFQUFFLE1BRFI7RUFFRVMsR0FBRyxFQUFFLEdBRlA7RUFHRUMsT0FBTyxFQUFFLElBSFg7RUFJRUMsS0FBSyxFQUFFLEdBSlQ7RUFLRUMsRUFBRSxFQUFFLEdBTE47RUFNRUMsT0FBTyxFQUFFO0FBTlgsQ0FqQ0YsRUF5Q0U7RUFDRWIsSUFBSSxFQUFFLE1BRFI7RUFFRVMsR0FBRyxFQUFFLEdBRlA7RUFHRUMsT0FBTyxFQUFFLElBSFg7RUFJRUMsS0FBSyxFQUFFLEdBSlQ7RUFLRUMsRUFBRSxFQUFFLEdBTE47RUFNRUMsT0FBTyxFQUFFO0FBTlgsQ0F6Q0YsRUFpREU7RUFDRWIsSUFBSSxFQUFFLE1BRFI7RUFFRVMsR0FBRyxFQUFFLEdBRlA7RUFHRUMsT0FBTyxFQUFFLElBSFg7RUFJRUMsS0FBSyxFQUFFLEdBSlQ7RUFLRUMsRUFBRSxFQUFFLEdBTE47RUFNRUMsT0FBTyxFQUFFO0FBTlgsQ0FqREYsRUF5REU7RUFDRWIsSUFBSSxFQUFFLE1BRFI7RUFFRVMsR0FBRyxFQUFFLEdBRlA7RUFHRUMsT0FBTyxFQUFFLElBSFg7RUFJRUMsS0FBSyxFQUFFLEdBSlQ7RUFLRUMsRUFBRSxFQUFFLEdBTE47RUFNRUMsT0FBTyxFQUFFO0FBTlgsQ0F6REYsRUFpRUU7RUFDRWIsSUFBSSxFQUFFLE1BRFI7RUFFRVMsR0FBRyxFQUFFLEdBRlA7RUFHRUMsT0FBTyxFQUFFLElBSFg7RUFJRUMsS0FBSyxFQUFFLEdBSlQ7RUFLRUMsRUFBRSxFQUFFLEdBTE47RUFNRUMsT0FBTyxFQUFFO0FBTlgsQ0FqRUYsRUF5RUU7RUFDRWIsSUFBSSxFQUFFLE1BRFI7RUFFRVMsR0FBRyxFQUFFLEdBRlA7RUFHRUMsT0FBTyxFQUFFLElBSFg7RUFJRUMsS0FBSyxFQUFFLEdBSlQ7RUFLRUMsRUFBRSxFQUFFLEdBTE47RUFNRUMsT0FBTyxFQUFFO0FBTlgsQ0F6RUYsRUFpRkU7RUFDRWIsSUFBSSxFQUFFLFdBRFI7RUFFRVMsR0FBRyxFQUFFLEdBRlA7RUFHRUMsT0FBTyxFQUFFLEtBSFg7RUFJRUMsS0FBSyxFQUFFLEdBSlQ7RUFLRUMsRUFBRSxFQUFFLEdBTE47RUFNRUMsT0FBTyxFQUFFO0FBTlgsQ0FqRkYsRUF5RkU7RUFDRWIsSUFBSSxFQUFFLE9BRFI7RUFFRVMsR0FBRyxFQUFFLEdBRlA7RUFHRUMsT0FBTyxFQUFFLEtBSFg7RUFJRUMsS0FBSyxFQUFFLEdBSlQ7RUFLRUMsRUFBRSxFQUFFLEdBTE47RUFNRUMsT0FBTyxFQUFFO0FBTlgsQ0F6RkYsRUFpR0U7RUFDRWIsSUFBSSxFQUFFLE9BRFI7RUFFRVMsR0FBRyxFQUFFLE9BRlA7RUFHRUMsT0FBTyxFQUFFLElBSFg7RUFJRUMsS0FBSyxFQUFFLE9BSlQ7RUFLRUMsRUFBRSxFQUFFLE9BTE47RUFNRUMsT0FBTyxFQUFFO0FBTlgsQ0FqR0YsQ0E3T2tCLEVBdVZsQixDQUNFO0VBQ0ViLElBQUksRUFBRSxXQURSO0VBRUVTLEdBQUcsRUFBRSxPQUZQO0VBR0VDLE9BQU8sRUFBRSxJQUhYO0VBSUVDLEtBQUssRUFBRSxPQUpUO0VBS0VDLEVBQUUsRUFBRSxPQUxOO0VBTUVDLE9BQU8sRUFBRTtBQU5YLENBREYsRUFTRTtFQUNFYixJQUFJLEVBQUUsTUFEUjtFQUVFUyxHQUFHLEVBQUUsR0FGUDtFQUdFQyxPQUFPLEVBQUUsSUFIWDtFQUlFQyxLQUFLLEVBQUUsR0FKVDtFQUtFQyxFQUFFLEVBQUUsR0FMTjtFQU1FQyxPQUFPLEVBQUU7QUFOWCxDQVRGLEVBaUJFO0VBQ0ViLElBQUksRUFBRSxNQURSO0VBRUVTLEdBQUcsRUFBRSxHQUZQO0VBR0VDLE9BQU8sRUFBRSxJQUhYO0VBSUVDLEtBQUssRUFBRSxHQUpUO0VBS0VDLEVBQUUsRUFBRSxHQUxOO0VBTUVDLE9BQU8sRUFBRTtBQU5YLENBakJGLEVBeUJFO0VBQ0ViLElBQUksRUFBRSxNQURSO0VBRUVTLEdBQUcsRUFBRSxHQUZQO0VBR0VDLE9BQU8sRUFBRSxJQUhYO0VBSUVDLEtBQUssRUFBRSxHQUpUO0VBS0VDLEVBQUUsRUFBRSxHQUxOO0VBTUVDLE9BQU8sRUFBRTtBQU5YLENBekJGLEVBaUNFO0VBQ0ViLElBQUksRUFBRSxNQURSO0VBRUVTLEdBQUcsRUFBRSxHQUZQO0VBR0VDLE9BQU8sRUFBRSxJQUhYO0VBSUVDLEtBQUssRUFBRSxHQUpUO0VBS0VDLEVBQUUsRUFBRSxHQUxOO0VBTUVDLE9BQU8sRUFBRTtBQU5YLENBakNGLEVBeUNFO0VBQ0ViLElBQUksRUFBRSxNQURSO0VBRUVTLEdBQUcsRUFBRSxHQUZQO0VBR0VDLE9BQU8sRUFBRSxJQUhYO0VBSUVDLEtBQUssRUFBRSxHQUpUO0VBS0VDLEVBQUUsRUFBRSxHQUxOO0VBTUVDLE9BQU8sRUFBRTtBQU5YLENBekNGLEVBaURFO0VBQ0ViLElBQUksRUFBRSxNQURSO0VBRUVTLEdBQUcsRUFBRSxHQUZQO0VBR0VDLE9BQU8sRUFBRSxJQUhYO0VBSUVDLEtBQUssRUFBRSxHQUpUO0VBS0VDLEVBQUUsRUFBRSxHQUxOO0VBTUVDLE9BQU8sRUFBRTtBQU5YLENBakRGLEVBeURFO0VBQ0ViLElBQUksRUFBRSxNQURSO0VBRUVTLEdBQUcsRUFBRSxHQUZQO0VBR0VDLE9BQU8sRUFBRSxJQUhYO0VBSUVDLEtBQUssRUFBRSxHQUpUO0VBS0VDLEVBQUUsRUFBRSxHQUxOO0VBTUVDLE9BQU8sRUFBRTtBQU5YLENBekRGLEVBaUVFO0VBQ0ViLElBQUksRUFBRSxPQURSO0VBRUVTLEdBQUcsRUFBRSxHQUZQO0VBR0VDLE9BQU8sRUFBRSxLQUhYO0VBSUVDLEtBQUssRUFBRSxHQUpUO0VBS0VDLEVBQUUsRUFBRSxHQUxOO0VBTUVDLE9BQU8sRUFBRTtBQU5YLENBakVGLEVBeUVFO0VBQ0ViLElBQUksRUFBRSxRQURSO0VBRUVTLEdBQUcsRUFBRSxHQUZQO0VBR0VDLE9BQU8sRUFBRSxLQUhYO0VBSUVDLEtBQUssRUFBRSxHQUpUO0VBS0VDLEVBQUUsRUFBRSxHQUxOO0VBTUVD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OztFQUNBLElBQUksQ0FBQ0YsYUFBYSxDQUFDRyxRQUFkLENBQXVCRixHQUFHLENBQUNHLFdBQTNCLENBQUwsRUFBOEM7SUFDNUNuQixRQUFRLENBQUNvQixLQUFULElBQWtCSixHQUFHLENBQUNHLFdBQXRCO0VBQ0Q7QUFDRjs7QUFFRHBCLFFBQVEsQ0FBQ3NCLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DUixRQUFuQyxFOzs7Ozs7Ozs7QUNoR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vc3JjL2pzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vc3JjL2pzL0J1dHRvbnNSb3cuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL3NyYy9qcy9EYXRhLmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvanMvS2V5Ym9yZC5qcyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vc3JjL2pzL1RleHRBcmVhLmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvanMvVGV4dERpdi5qcyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vc3JjL2pzL3JlbmRlckJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL3NyYy9zYXNzL3N0eWxlLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEJ1dHRvbiB7XHJcbiAgY29uc3RydWN0b3IoZGF0YSwgY29tYmluYXRpb24pIHtcclxuICAgIHRoaXMuZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5jbGFzcyA9ICdidXR0b24nO1xyXG4gICAgdGhpcy5jbGFzc0VsZW0gPSBkYXRhLmNvZGUudG9Mb3dlckNhc2UoKTtcclxuICAgIHRoaXMuY29tYmluYXRpb24gPSBjb21iaW5hdGlvbjtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGFbY29tYmluYXRpb25dO1xyXG4gICAgLy8gY29uc29sZS5sb2coT2JqZWN0LmtleXMoZGF0YSkpO1xyXG4gIH1cclxuXHJcbiAgYXBwZW5kVG8ocGFyZW50KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGEpO1xyXG4gICAgdGhpcy5lbGVtLmlubmVySFRNTCA9IHRoaXMuZGF0YTtcclxuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3MpO1xyXG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc0VsZW0pO1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBCdXR0b25zUm93IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5jbGFzcyA9ICdidXR0b25zUm93JztcclxuICB9XHJcblxyXG4gIGFwcGVuZFRvKHBhcmVudCkge1xyXG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzcyk7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IERhdGEgPSBbXHJcbiAgW1xyXG4gICAge1xyXG4gICAgICBjb2RlOiAnQmFja3F1b3RlJyxcclxuICAgICAga2V5OiAnYCcsXHJcbiAgICAgIGtleUNvZGU6ICcxOTInLFxyXG4gICAgICBzaGlmdDogJ34nLFxyXG4gICAgICBydTogJ9GRJyxcclxuICAgICAgc2hpZnRSdTogJ9CBJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogJ0RpZ2l0MScsXHJcbiAgICAgIGtleTogJzEnLFxyXG4gICAgICBrZXlDb2RlOiAnNDknLFxyXG4gICAgICBzaGlmdDogJyEnLFxyXG4gICAgICBydTogJzEnLFxyXG4gICAgICBzaGlmdFJ1OiAnISdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6ICdEaWdpdDInLFxyXG4gICAgICBrZXk6ICcyJyxcclxuICAgICAga2V5Q29kZTogJzUwJyxcclxuICAgICAgc2hpZnQ6ICdAJyxcclxuICAgICAgc2hpZnRSdTogJ1wiJyxcclxuICAgICAgcnU6ICcyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogJ0RpZ2l0MycsXHJcbiAgICAgIGtleTogJzMnLFxyXG4gICAgICBrZXlDb2RlOiAnNTEnLFxyXG4gICAgICBzaGlmdDogJyMnLFxyXG4gICAgICBzaGlmdFJ1OiAn4oSWJyxcclxuICAgICAgcnU6ICczJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogJ0RpZ2l0NCcsXHJcbiAgICAgIGtleTogJzQnLFxyXG4gICAgICBrZXlDb2RlOiAnNTInLFxyXG4gICAgICBzaGlmdDogJyQnLFxyXG4gICAgICBzaGlmdFJ1OiAnOycsXHJcbiAgICAgIHJ1OiAnNCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6ICdEaWdpdDUnLFxyXG4gICAgICBrZXk6ICc1JyxcclxuICAgICAga2V5Q29kZTogJzUzJyxcclxuICAgICAgc2hpZnQ6ICclJyxcclxuICAgICAgcnU6ICc1JyxcclxuICAgICAgc2hpZnRSdTogJyUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiAnRGlnaXQ2JyxcclxuICAgICAga2V5OiAnNicsXHJcbiAgICAgIGtleUNvZGU6ICc1NCcsXHJcbiAgICAgIHNoaWZ0OiAnXicsXHJcbiAgICAgIHNoaWZ0UnU6ICc6JyxcclxuICAgICAgcnU6ICc2J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogJ0RpZ2l0NycsXHJcbiAgICAgIGtleTogJzcnLFxyXG4gICAgICBrZXlDb2RlOiAnNTUnLFxyXG4gICAgICBzaGlmdDogJyYnLFxyXG4gICAgICBzaGlmdFJ1OiAnPycsXHJcbiAgICAgIHJ1OiAnNydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6ICdEaWdpdDgnLFxyXG4gICAgICBrZXk6ICc4JyxcclxuICAgICAga2V5Q29kZTogJzU2JyxcclxuICAgICAgc2hpZnQ6ICcqJyxcclxuICAgICAgcnU6ICc4JyxcclxuICAgICAgc2hpZnRSdTogJyonXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiAnRGlnaXQ5JyxcclxuICAgICAga2V5OiAnOScsXHJcbiAgICAgIGtleUNvZGU6ICc1NycsXHJcbiAgICAgIHNoaWZ0OiAnKCcsXHJcbiAgICAgIHJ1OiAnOScsXHJcbiAgICAgIHNoaWZ0UnU6ICcoJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogJ0RpZ2l0MCcsXHJcbiAgICAgIGtleTogJzAnLFxyXG4gICAgICBrZXlDb2RlOiAnNDgnLFxyXG4gICAgICBzaGlmdDogJyknLFxyXG4gICAgICBydTogJzAnLFxyXG4gICAgICBzaGlmdFJ1OiAnKSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6ICdNaW51cycsXHJcbiAgICAgIGtleTogJy0nLFxyXG4gICAgICBrZXlDb2RlOiAnMTg5JyxcclxuICAgICAgc2hpZnQ6ICdfJyxcclxuICAgICAgcnU6ICctJyxcclxuICAgICAgc2hpZnRSdTogJ18nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiAnRXF1YWwnLFxyXG4gICAgICBrZXk6ICc9JyxcclxuICAgICAga2V5Q29kZTogJzE4NycsXHJcbiAgICAgIHNoaWZ0OiAnKycsXHJcbiAgICAgIHJ1OiAnPScsXHJcbiAgICAgIHNoaWZ0UnU6ICcrJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogJ0JhY2tzcGFjZScsXHJcbiAgICAgIGtleTogJ0JhY2tzcGFjZScsXHJcbiAgICAgIGtleUNvZGU6ICc4JyxcclxuICAgICAgc2hpZnQ6ICdCYWNrc3BhY2UnLFxyXG4gICAgICBydTogJ0JhY2tzcGFjZScsXHJcbiAgICAgIHNoaWZ0UnU6ICdCYWNrc3BhY2UnXHJcbiAgICB9XHJcbiAgXSxcclxuICBbXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6ICdUYWInLFxyXG4gICAgICBrZXk6ICdUYWInLFxyXG4gICAgICBrZXlDb2RlOiAnOScsXHJcbiAgICAgIHNoaWZ0OiAnVGFiJyxcclxuICAgICAgcnU6ICdUYWInLFxyXG4gICAgICBzaGlmdFJ1OiAnVGFiJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogJ0tleVEnLFxyXG4gICAgICBrZXk6ICdxJyxcclxuICAgICAga2V5Q29kZTogJzgxJyxcclxuICAgICAgc2hpZnQ6ICdRJyxcclxuICAgICAgcnU6ICfQuScsXHJcbiAgICAgIHNoaWZ0UnU6ICfQmSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6ICdLZXlXJyxcclxuICAgICAga2V5OiAndycsXHJcbiAgICAgIGtleUNvZGU6ICc4NycsXHJcbiAgICAgIHNoaWZ0OiAnVycsXHJcbiAgICAgIHJ1OiAn0YYnLFxyXG4gICAgICBzaGlmdFJ1OiAn0KYnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiAnS2V5RScsXHJcbiAgICAgIGtleTogJ2UnLFxyXG4gICAgICBrZXlDb2RlOiAnNjknLFxyXG4gICAgICBzaGlmdDogJ0UnLFxyXG4gICAgICBydTogJ9GDJyxcclxuICAgICAgc2hpZnRSdTogJ9CjJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogJ0tleVInLFxyXG4gICAgICBrZXk6ICdyJyxcclxuICAgICAga2V5Q29kZTogJzgyJyxcclxuICAgICAgc2hpZnQ6ICdSJyxcclxuICAgICAgcnU6ICfQuicsXHJcbiAgICAgIHNoaWZ0UnU6ICfQmidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6ICdLZXlUJyxcclxuICAgICAga2V5OiAndCcsXHJcbiAgICAgIGtleUNvZGU6ICc4NCcsXHJcbiAgICAgIHNoaWZ0OiAnVCcsXHJcbiAgICAgIHJ1OiAn0LUnLFxyXG4gICAgICBzaGlmdFJ1OiAn0JUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiAnS2V5WScsXHJcbiAgICAgIGtleTogJ3knLFxyXG4gICAgICBrZXlDb2RlOiAnODknLFxyXG4gICAgICBzaGlmdDogJ1knLFxyXG4gICAgICBydTogJ9C9JyxcclxuICAgICAgc2hpZnRSdTogJ9CdJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogJ0tleVUnLFxyXG4gICAgICBrZXk6ICd1JyxcclxuICAgICAga2V5Q29kZTogJzg1JyxcclxuICAgICAgc2hpZnQ6ICdVJyxcclxuICAgICAgcnU6ICfQsycsXHJcbiAgICAgIHNoaWZ0UnU6ICfQkydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6ICdLZXlJJyxcclxuICAgICAga2V5OiAnaScsXHJcbiAgICAgIGtleUNvZGU6ICc3MycsXHJcbiAgICAgIHNoaWZ0OiAnSScsXHJcbiAgICAgIHJ1OiAn0YgnLFxyXG4gICAgICBzaGlmdFJ1OiAn0KgnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiAnS2V5TycsXHJcbiAgICAgIGtleTogJ28nLFxyXG4gICAgICBrZXlDb2RlOiAnMTExJyxcclxuICAgICAgc2hpZnQ6ICdPJyxcclxuICAgICAgcnU6ICfRiScsXHJcbiAgICAgIHNoaWZ0UnU6ICfQqSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6ICdLZXlQJyxcclxuICAgICAga2V5OiAncCcsXHJcbiAgICAgIGtleUNvZGU6ICc4MCcsXHJcbiAgICAgIHNoaWZ0OiAnUCcsXHJcbiAgICAgIHJ1OiAn0LcnLFxyXG4gICAgICBzaGlmdFJ1OiAn0JcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiAnQnJhY2tldExlZnQnLFxyXG4gICAgICBrZXk6ICdbJyxcclxuICAgICAga2V5Q29kZTogJzIxOScsXHJcbiAgICAgIHNoaWZ0OiAneycsXHJcbiAgICAgIHJ1OiAn0YUnLFxyXG4gICAgICBzaGlmdFJ1OiAn0KUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiAnQnJhY2tldFJpZ2h0JyxcclxuICAgICAga2V5OiAnXScsXHJcbiAgICAgIGtleUNvZGU6ICcyMjEnLFxyXG4gICAgICBzaGlmdDogJ30nLFxyXG4gICAgICBydTogJ9GKJyxcclxuICAgICAgc2hpZnRSdTogJ9CqJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogJ0JhY2tzbGFzaCcsXHJcbiAgICAgIGtleTogJ1xcXFwnLFxyXG4gICAgICBrZXlDb2RlOiAnMjIwJyxcclxuICAgICAgc2hpZnQ6ICd8JyxcclxuICAgICAgc2hpZnRSdTogJy8nLFxyXG4gICAgICBydTogJ1xcXFwnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiAnRGVsZXRlJyxcclxuICAgICAga2V5OiAnRGVsZXRlJyxcclxuICAgICAga2V5Q29kZTogJzQ2JyxcclxuICAgICAgc2hpZnQ6ICdEZWxldGUnLFxyXG4gICAgICBydTogJ0RlbGV0ZScsXHJcbiAgICAgIHNoaWZ0UnU6ICdEZWxldGUnXHJcbiAgICB9XHJcbiAgXSxcclxuICBbXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6ICdDYXBzTG9jaycsXHJcbiAgICAgIGtleTogJ0NhcHNMb2NrJyxcclxuICAgICAga2V5Q29kZTogJzIwJyxcclxuICAgICAgc2hpZnQ6ICdDYXBzTG9jaycsXHJcbiAgICAgIHJ1OiAnQ2Fwc0xvY2snLFxyXG4gICAgICBzaGlmdFJ1OiAnQ2Fwc0xvY2snXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiAnS2V5QScsXHJcbiAgICAgIGtleTogJ2EnLFxyXG4gICAgICBrZXlDb2RlOiAnNjUnLFxyXG4gICAgICBzaGlmdDogJ0EnLFxyXG4gICAgICBydTogJ9GEJyxcclxuICAgICAgc2hpZnRSdTogJ9CkJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogJ0tleVMnLFxyXG4gICAgICBrZXk6ICdzJyxcclxuICAgICAga2V5Q29kZTogJzgzJyxcclxuICAgICAgc2hpZnQ6ICdTJyxcclxuICAgICAgcnU6ICfRiycsXHJcbiAgICAgIHNoaWZ0UnU6ICfQqydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6ICdLZXlEJyxcclxuICAgICAga2V5OiAnZCcsXHJcbiAgICAgIGtleUNvZGU6ICc2OCcsXHJcbiAgICAgIHNoaWZ0OiAnRCcsXHJcbiAgICAgIHJ1OiAn0LInLFxyXG4gICAgICBzaGlmdFJ1OiAn0JInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiAnS2V5RicsXHJcbiAgICAgIGtleTogJ2YnLFxyXG4gICAgICBrZXlDb2RlOiAnNzAnLFxyXG4gICAgICBzaGlmdDogJ0YnLFxyXG4gICAgICBydTogJ9CwJyxcclxuICAgICAgc2hpZnRSdTogJ9CQJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogJ0tleUcnLFxyXG4gICAgICBrZXk6ICdnJyxcclxuICAgICAga2V5Q29kZTogJzcxJyxcclxuICAgICAgc2hpZnQ6ICdHJyxcclxuICAgICAgcnU6ICfQvycsXHJcbiAgICAgIHNoaWZ0UnU6ICfQnydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6ICdLZXlIJyxcclxuICAgICAga2V5OiAnaCcsXHJcbiAgICAgIGtleUNvZGU6ICc3MicsXHJcbiAgICAgIHNoaWZ0OiAnSCcsXHJcbiAgICAgIHJ1OiAn0YAnLFxyXG4gICAgICBzaGlmdFJ1OiAn0KAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiAnS2V5SicsXHJcbiAgICAgIGtleTogJ2onLFxyXG4gICAgICBrZXlDb2RlOiAnNzQnLFxyXG4gICAgICBzaGlmdDogJ0onLFxyXG4gICAgICBydTogJ9C+JyxcclxuICAgICAgc2hpZnRSdTogJ9CeJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogJ0tleUsnLFxyXG4gICAgICBrZXk6ICdrJyxcclxuICAgICAga2V5Q29kZTogJzc1JyxcclxuICAgICAgc2hpZnQ6ICdLJyxcclxuICAgICAgcnU6ICfQuycsXHJcbiAgICAgIHNoaWZ0UnU6ICfQmydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6ICdLZXlMJyxcclxuICAgICAga2V5OiAnbCcsXHJcbiAgICAgIGtleUNvZGU6ICc3NicsXHJcbiAgICAgIHNoaWZ0OiAnTCcsXHJcbiAgICAgIHJ1OiAn0LQnLFxyXG4gICAgICBzaGlmdFJ1OiAn0JQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiAnU2VtaWNvbG9uJyxcclxuICAgICAga2V5OiAnOycsXHJcbiAgICAgIGtleUNvZGU6ICcxODYnLFxyXG4gICAgICBzaGlmdDogJzonLFxyXG4gICAgICBydTogJ9C2JyxcclxuICAgICAgc2hpZnRSdTogJ9CWJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogJ1F1b3RlJyxcclxuICAgICAga2V5OiBcIidcIixcclxuICAgICAga2V5Q29kZTogJzIyMicsXHJcbiAgICAgIHNoaWZ0OiAnXCInLFxyXG4gICAgICBydTogJ9GNJyxcclxuICAgICAgc2hpZnRSdTogJ9CtJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogJ0VudGVyJyxcclxuICAgICAga2V5OiAnRW50ZXInLFxyXG4gICAgICBrZXlDb2RlOiAnMTMnLFxyXG4gICAgICBzaGlmdDogJ0VudGVyJyxcclxuICAgICAgcnU6ICdFbnRlcicsXHJcbiAgICAgIHNoaWZ0UnU6ICdFbnRlcidcclxuICAgIH1cclxuICBdLFxyXG4gIFtcclxuICAgIHtcclxuICAgICAgY29kZTogJ1NoaWZ0TGVmdCcsXHJcbiAgICAgIGtleTogJ1NoaWZ0JyxcclxuICAgICAga2V5Q29kZTogJzE2JyxcclxuICAgICAgc2hpZnQ6ICdTaGlmdCcsXHJcbiAgICAgIHJ1OiAnU2hpZnQnLFxyXG4gICAgICBzaGlmdFJ1OiAnU2hpZnQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiAnS2V5WicsXHJcbiAgICAgIGtleTogJ3onLFxyXG4gICAgICBrZXlDb2RlOiAnOTAnLFxyXG4gICAgICBzaGlmdDogJ1onLFxyXG4gICAgICBydTogJ9GPJyxcclxuICAgICAgc2hpZnRSdTogJ9CvJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogJ0tleVgnLFxyXG4gICAgICBrZXk6ICd4JyxcclxuICAgICAga2V5Q29kZTogJzg4JyxcclxuICAgICAgc2hpZnQ6ICdYJyxcclxuICAgICAgcnU6ICfRhycsXHJcbiAgICAgIHNoaWZ0UnU6ICfQpydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6ICdLZXlDJyxcclxuICAgICAga2V5OiAnYycsXHJcbiAgICAgIGtleUNvZGU6ICc2NycsXHJcbiAgICAgIHNoaWZ0OiAnQycsXHJcbiAgICAgIHJ1OiAn0YEnLFxyXG4gICAgICBzaGlmdFJ1OiAn0KEnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiAnS2V5VicsXHJcbiAgICAgIGtleTogJ3YnLFxyXG4gICAgICBrZXlDb2RlOiAnODYnLFxyXG4gICAgICBzaGlmdDogJ1YnLFxyXG4gICAgICBydTogJ9C8JyxcclxuICAgICAgc2hpZnRSdTogJ9CcJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogJ0tleUInLFxyXG4gICAgICBrZXk6ICdiJyxcclxuICAgICAga2V5Q29kZTogJzY2JyxcclxuICAgICAgc2hpZnQ6ICdCJyxcclxuICAgICAgcnU6ICfQuCcsXHJcbiAgICAgIHNoaWZ0UnU6ICfQmCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6ICdLZXlOJyxcclxuICAgICAga2V5OiAnbicsXHJcbiAgICAgIGtleUNvZGU6ICc3OCcsXHJcbiAgICAgIHNoaWZ0OiAnTicsXHJcbiAgICAgIHJ1OiAn0YInLFxyXG4gICAgICBzaGlmdFJ1OiAn0KInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiAnS2V5TScsXHJcbiAgICAgIGtleTogJ20nLFxyXG4gICAgICBrZXlDb2RlOiAnNzcnLFxyXG4gICAgICBzaGlmdDogJ00nLFxyXG4gICAgICBydTogJ9GMJyxcclxuICAgICAgc2hpZnRSdTogJ9CsJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogJ0NvbW1hJyxcclxuICAgICAga2V5OiAnLCcsXHJcbiAgICAgIGtleUNvZGU6ICcxODgnLFxyXG4gICAgICBzaGlmdDogJzwnLFxyXG4gICAgICBydTogJ9CxJyxcclxuICAgICAgc2hpZnRSdTogJ9CRJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogJ1BlcmlvZCcsXHJcbiAgICAgIGtleTogJy4nLFxyXG4gICAgICBrZXlDb2RlOiAnMTkwJyxcclxuICAgICAgc2hpZnQ6ICc+JyxcclxuICAgICAgcnU6ICfRjicsXHJcbiAgICAgIHNoaWZ0UnU6ICfQridcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6ICdTbGFzaCcsXHJcbiAgICAgIGtleTogJy8nLFxyXG4gICAgICBrZXlDb2RlOiAnMTkxJyxcclxuICAgICAgc2hpZnQ6ICc/JyxcclxuICAgICAgcnU6ICcuJyxcclxuICAgICAgc2hpZnRSdTogJywnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiAnQXJyb3dVcCcsXHJcbiAgICAgIGtleTogJ+KWsicsXHJcbiAgICAgIGtleUNvZGU6ICczOCcsXHJcbiAgICAgIHNoaWZ0OiAn4payJyxcclxuICAgICAgcnU6ICfilrInLFxyXG4gICAgICBzaGlmdFJ1OiAn4payJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogJ1NoaWZ0UmlnaHQnLFxyXG4gICAgICBrZXk6ICdTaGlmdCcsXHJcbiAgICAgIGtleUNvZGU6ICcxNicsXHJcbiAgICAgIHNoaWZ0OiAnU2hpZnQnLFxyXG4gICAgICBydTogJ1NoaWZ0JyxcclxuICAgICAgc2hpZnRSdTogJ1NoaWZ0J1xyXG4gICAgfVxyXG4gIF0sXHJcbiAgW1xyXG4gICAge1xyXG4gICAgICBjb2RlOiAnQ29udHJvbExlZnQnLFxyXG4gICAgICBrZXk6ICdDdHJsJyxcclxuICAgICAga2V5Q29kZTogJzE3JyxcclxuICAgICAgc2hpZnQ6ICdDdHJsJyxcclxuICAgICAgcnU6ICdDdHJsJyxcclxuICAgICAgc2hpZnRSdTogJ0N0cmwnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiAnTWV0YUxlZnQnLFxyXG4gICAgICBrZXk6ICdXaW4nLFxyXG4gICAgICBrZXlDb2RlOiAnOTEnLFxyXG4gICAgICBzaGlmdDogJ1dpbicsXHJcbiAgICAgIHJ1OiAnV2luJyxcclxuICAgICAgc2hpZnRSdTogJ1dpbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6ICdBbHRMZWZ0JyxcclxuICAgICAga2V5OiAnQWx0JyxcclxuICAgICAga2V5Q29kZTogJzE4JyxcclxuICAgICAgc2hpZnQ6ICdBbHQnLFxyXG4gICAgICBydTogJ0FsdCcsXHJcbiAgICAgIHNoaWZ0UnU6ICdBbHQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiAnU3BhY2UnLFxyXG4gICAgICBrZXk6ICcgJyxcclxuICAgICAga2V5Q29kZTogJzMyJyxcclxuICAgICAgc2hpZnQ6ICcgJyxcclxuICAgICAgcnU6ICcgJyxcclxuICAgICAgc2hpZnRSdTogJyAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiAnQWx0UmlnaHQnLFxyXG4gICAgICBrZXk6ICdBbHQnLFxyXG4gICAgICBrZXlDb2RlOiAnMTgnLFxyXG4gICAgICBzaGlmdDogJ0FsdCcsXHJcbiAgICAgIHJ1OiAnQWx0JyxcclxuICAgICAgc2hpZnRSdTogJ0FsdCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6ICdDb250cm9sUmlnaHQnLFxyXG4gICAgICBrZXk6ICdDdHJsJyxcclxuICAgICAga2V5Q29kZTogJzE3JyxcclxuICAgICAgc2hpZnQ6ICdDdHJsJyxcclxuICAgICAgcnU6ICdDdHJsJyxcclxuICAgICAgc2hpZnRSdTogJ0N0cmwnXHJcbiAgICB9LFxyXG4gICAgLy8geyBjb2RlOiAnTWV0YVJpZ2h0Jywga2V5OiAnTWV0YScsIGtleUNvZGU6ICc5MicgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogJ0Fycm93TGVmdCcsXHJcbiAgICAgIGtleTogJ+KXhCcsXHJcbiAgICAgIGtleUNvZGU6ICczNycsXHJcbiAgICAgIHNoaWZ0OiAn4peEJyxcclxuICAgICAgcnU6ICfil4QnLFxyXG4gICAgICBzaGlmdFJ1OiAn4peEJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogJ0Fycm93RG93bicsXHJcbiAgICAgIGtleTogJ+KWvCcsXHJcbiAgICAgIGtleUNvZGU6ICc0MCcsXHJcbiAgICAgIHNoaWZ0OiAn4pa8JyxcclxuICAgICAgcnU6ICfilrwnLFxyXG4gICAgICBzaGlmdFJ1OiAn4pa8J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogJ0Fycm93UmlnaHQnLFxyXG4gICAgICBrZXk6ICfilronLFxyXG4gICAgICBrZXlDb2RlOiAnMzknLFxyXG4gICAgICBzaGlmdDogJ+KWuicsXHJcbiAgICAgIHJ1OiAn4pa6JyxcclxuICAgICAgc2hpZnRSdTogJ+KWuidcclxuICAgIH1cclxuICBdXHJcbl07XHJcbiIsImV4cG9ydCBjbGFzcyBLZXlib2FyZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMuY2xhc3MgPSAna2V5Ym9hcmQnO1xyXG4gIH1cclxuXHJcbiAgYXBwZW5kVG8ocGFyZW50KSB7XHJcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzKTtcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgVGV4dEFyZWEge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMuZGl2V3JhcENsYXNzID0gJ3RleHRhcmVhX193cmFwcGVyJztcclxuICAgIHRoaXMuZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICB0aGlzLmNsYXNzID0gJ3RleHRhcmVhJztcclxuICB9XHJcblxyXG4gIGFwcGVuZFRvKHBhcmVudCkge1xyXG4gICAgdGhpcy5kaXYuY2xhc3NMaXN0LmFkZCh0aGlzLmRpdldyYXBDbGFzcyk7XHJcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzKTtcclxuICAgIHRoaXMuZGl2LmFwcGVuZCh0aGlzLmVsZW0pO1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZGl2KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFRleHREaXYge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5lbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICB0aGlzLmNsYXNzID0gJ3RleHREaXYnO1xyXG4gIH1cclxuXHJcbiAgYXBwZW5kVG8ocGFyZW50KSB7XHJcbiAgICB0aGlzLmVsZW0uaW5uZXJIVE1MID0gJ9Ch0YHRi9C70LrQsCDQvdCwIFBSOiAnXHJcbiAgICB0aGlzLmEuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vZWxvY3Ryby92aXJ0dWFsLWtleWJvYXJkL3B1bGwvMidcclxuICAgIHRoaXMuYS50YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgdGhpcy5hLmlubmVySFRNTCA9ICdodHRwczovL2dpdGh1Yi5jb20vZWxvY3Ryby92aXJ0dWFsLWtleWJvYXJkL3B1bGwvMidcclxuICAgIHRoaXMuZWxlbS5hcHBlbmQodGhpcy5hKVxyXG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzcyk7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQnV0dG9uc1JvdyB9IGZyb20gJy4vQnV0dG9uc1Jvdyc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vQnV0dG9uJztcclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4vRGF0YSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQnV0dG9ucyhwYXJlbnQsIGNvbWJpbmF0aW9uKSB7XHJcbiAgZm9yIChsZXQgcm93cyA9IDA7IHJvd3MgPCA1OyByb3dzICs9IDEpIHtcclxuICAgIG5ldyBCdXR0b25zUm93KCkuYXBwZW5kVG8ocGFyZW50KTtcclxuICAgIGxldCBidXR0b25zUm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbnNSb3cnKTtcclxuICAgIERhdGFbcm93c10uZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICBuZXcgQnV0dG9uKGVsZW0sIGNvbWJpbmF0aW9uKS5hcHBlbmRUbyhidXR0b25zUm93W2J1dHRvbnNSb3cubGVuZ3RoIC0gMV0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVGV4dERpdiB9IGZyb20gJy4vanMvVGV4dERpdic7XHJcbmltcG9ydCB7IFRleHRBcmVhIH0gZnJvbSAnLi9qcy9UZXh0QXJlYSc7XHJcbmltcG9ydCB7IEtleWJvYXJkIH0gZnJvbSAnLi9qcy9LZXlib3JkJztcclxuaW1wb3J0IHsgcmVuZGVyQnV0dG9ucyB9IGZyb20gJy4vanMvcmVuZGVyQnV0dG9ucyc7XHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5sZXQgY29tYmluYXRpb24gPSAna2V5JztcclxuXHJcbm5ldyBUZXh0RGl2KCkuYXBwZW5kVG8oYm9keSk7XHJcbm5ldyBUZXh0QXJlYSgpLmFwcGVuZFRvKGJvZHkpO1xyXG5uZXcgS2V5Ym9hcmQoKS5hcHBlbmRUbyhib2R5KTtcclxuXHJcbmNvbnN0IGtleWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkJyk7XHJcbmNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHRhcmVhJyk7XHJcblxyXG5yZW5kZXJCdXR0b25zKGtleWJvYXJkLCBjb21iaW5hdGlvbik7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVEb3duKGUpIHtcclxuICAvLyBjb25zb2xlLmxvZyhlLmtleUNvZGUpO1xyXG4gIGxldCBidXREb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZS5jb2RlLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgaWYgKFxyXG4gICAgLy8gIWJ1dERvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlmdGxlZnQnKSAmJlxyXG4gICAgLy8gIWJ1dERvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhbHRsZWZ0JykgJiZcclxuICAgICFidXREb3duLmNsYXNzTGlzdC5jb250YWlucygndGFiJylcclxuICApIHtcclxuICAgIGJ1dERvd24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgfVxyXG5cclxuICBpZiAoZS5jdHJsS2V5ICYmIGUuYWx0S2V5KSB7XHJcbiAgICBpZiAoY29tYmluYXRpb24gPT09ICdydScpIHtcclxuICAgICAgY29tYmluYXRpb24gPSAna2V5JztcclxuICAgICAga2V5Ym9hcmQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIHJlbmRlckJ1dHRvbnMoa2V5Ym9hcmQsIGNvbWJpbmF0aW9uKTtcclxuICAgIH0gZWxzZSBpZiAoY29tYmluYXRpb24gPT09ICdrZXknKSB7XHJcbiAgICAgIGNvbWJpbmF0aW9uID0gJ3J1JztcclxuICAgICAga2V5Ym9hcmQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIHJlbmRlckJ1dHRvbnMoa2V5Ym9hcmQsIGNvbWJpbmF0aW9uKTtcclxuICAgIH0gZWxzZSBpZiAoY29tYmluYXRpb24gPT09ICdzaGlmdCcpIHtcclxuICAgICAgY29tYmluYXRpb24gPSAnc2hpZnRSdSc7XHJcbiAgICAgIGtleWJvYXJkLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICByZW5kZXJCdXR0b25zKGtleWJvYXJkLCBjb21iaW5hdGlvbik7XHJcbiAgICB9IGVsc2UgaWYgKGNvbWJpbmF0aW9uID09PSAnc2hpZnRSdScpIHtcclxuICAgICAgY29tYmluYXRpb24gPSAnc2hpZnQnO1xyXG4gICAgICBrZXlib2FyZC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgcmVuZGVyQnV0dG9ucyhrZXlib2FyZCwgY29tYmluYXRpb24pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoZS5zaGlmdEtleSB8fCBlLmtleUNvZGUgPT09IDIwKSB7XHJcbiAgICBpZiAoY29tYmluYXRpb24gPT09ICdydScpIHtcclxuICAgICAgY29tYmluYXRpb24gPSAnc2hpZnRSdSc7XHJcbiAgICAgIGtleWJvYXJkLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICByZW5kZXJCdXR0b25zKGtleWJvYXJkLCBjb21iaW5hdGlvbik7XHJcbiAgICAgIGxldCBjYXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2Fwc2xvY2snKTtcclxuICAgICAgY2Fwcy5jbGFzc0xpc3QuYWRkKCcuYWN0aXZlJyk7XHJcbiAgICB9IGVsc2UgaWYgKGNvbWJpbmF0aW9uID09PSAnc2hpZnRSdScpIHtcclxuICAgICAgY29tYmluYXRpb24gPSAncnUnO1xyXG4gICAgICBrZXlib2FyZC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgcmVuZGVyQnV0dG9ucyhrZXlib2FyZCwgY29tYmluYXRpb24pO1xyXG4gICAgfSBlbHNlIGlmIChjb21iaW5hdGlvbiA9PT0gJ2tleScpIHtcclxuICAgICAgY29tYmluYXRpb24gPSAnc2hpZnQnO1xyXG4gICAgICBrZXlib2FyZC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgcmVuZGVyQnV0dG9ucyhrZXlib2FyZCwgY29tYmluYXRpb24pO1xyXG4gICAgfSBlbHNlIGlmIChjb21iaW5hdGlvbiA9PT0gJ3NoaWZ0Jykge1xyXG4gICAgICBjb21iaW5hdGlvbiA9ICdrZXknO1xyXG4gICAgICBrZXlib2FyZC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgcmVuZGVyQnV0dG9ucyhrZXlib2FyZCwgY29tYmluYXRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlVXAoZSkge1xyXG4gIGxldCBidXREb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZS5jb2RlLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgYnV0RG93bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAvLyBjb25zb2xlLmxvZyh0ZXh0QXJlYS52YWx1ZSk7XHJcbn1cclxuXHJcbmJvZHkub25rZXlkb3duID0gaGFuZGxlRG93bjtcclxuYm9keS5vbmtleXVwID0gaGFuZGxlVXA7XHJcblxyXG5mdW5jdGlvbiBidG5DbGljayhldmVudCkge1xyXG4gIGNvbnN0IGFyckJ0blNwZWNpYWwgPSBbXHJcbiAgICAnVGFiJyxcclxuICAgICdDYXBzTG9jaycsXHJcbiAgICAnU2hpZnQnLFxyXG4gICAgJ0N0cmwnLFxyXG4gICAgJ1dpbicsXHJcbiAgICAnQWx0JyxcclxuICAgICdCYWNrc3BhY2UnLFxyXG4gICAgJ0RlbGV0ZScsXHJcbiAgICAnRW50ZXInXHJcbiAgXTtcclxuICBsZXQgYnRuID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5idXR0b24nKTtcclxuICBpZiAoIWFyckJ0blNwZWNpYWwuaW5jbHVkZXMoYnRuLnRleHRDb250ZW50KSkge1xyXG4gICAgdGV4dEFyZWEudmFsdWUgKz0gYnRuLnRleHRDb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxua2V5Ym9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBidG5DbGljayk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJCdXR0b24iLCJkYXRhIiwiY29tYmluYXRpb24iLCJlbGVtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NFbGVtIiwiY29kZSIsInRvTG93ZXJDYXNlIiwicGFyZW50IiwiaW5uZXJIVE1MIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJCdXR0b25zUm93IiwiRGF0YSIsImtleSIsImtleUNvZGUiLCJzaGlmdCIsInJ1Iiwic2hpZnRSdSIsIktleWJvYXJkIiwiVGV4dEFyZWEiLCJkaXYiLCJkaXZXcmFwQ2xhc3MiLCJhcHBlbmQiLCJUZXh0RGl2IiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZW5kZXJCdXR0b25zIiwicm93cyIsImFwcGVuZFRvIiwiYnV0dG9uc1JvdyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibGVuZ3RoIiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJrZXlib2FyZCIsInRleHRBcmVhIiwiaGFuZGxlRG93biIsImUiLCJidXREb3duIiwiY29udGFpbnMiLCJjdHJsS2V5IiwiYWx0S2V5Iiwic2hpZnRLZXkiLCJjYXBzIiwiaGFuZGxlVXAiLCJyZW1vdmUiLCJvbmtleWRvd24iLCJvbmtleXVwIiwiYnRuQ2xpY2siLCJldmVudCIsImFyckJ0blNwZWNpYWwiLCJidG4iLCJjbG9zZXN0IiwiaW5jbHVkZXMiLCJ0ZXh0Q29udGVudCIsInZhbHVlIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=