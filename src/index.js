import { TextDiv } from './js/TextDiv';
import { TextArea } from './js/TextArea';
import { Keyboard } from './js/Keybord';
import { renderButtons } from './js/renderButtons';

const body = document.querySelector('body');
let combination = 'key';

new TextDiv().appendTo(body);
new TextArea().appendTo(body);
new Keyboard().appendTo(body);

const keyboard = document.querySelector('.keyboard');
const textArea = document.querySelector('.textarea');

renderButtons(keyboard, combination);

function handleDown(e) {
  // console.log(e.keyCode);
  let butDown = document.querySelector(`.${e.code.toLowerCase()}`);
  if (
    // !butDown.classList.contains('shiftleft') &&
    // !butDown.classList.contains('altleft') &&
    !butDown.classList.contains('tab')
  ) {
    butDown.classList.add('active');
  }

  if (e.ctrlKey && e.altKey) {
    if (combination === 'ru') {
      combination = 'key';
      keyboard.innerHTML = '';
      renderButtons(keyboard, combination);
    } else if (combination === 'key') {
      combination = 'ru';
      keyboard.innerHTML = '';
      renderButtons(keyboard, combination);
    } else if (combination === 'shift') {
      combination = 'shiftRu';
      keyboard.innerHTML = '';
      renderButtons(keyboard, combination);
    } else if (combination === 'shiftRu') {
      combination = 'shift';
      keyboard.innerHTML = '';
      renderButtons(keyboard, combination);
    }
  } else if (e.shiftKey || e.keyCode === 20) {
    if (combination === 'ru') {
      combination = 'shiftRu';
      keyboard.innerHTML = '';
      renderButtons(keyboard, combination);
      let caps = document.querySelector('capslock');
      caps.classList.add('.active');
    } else if (combination === 'shiftRu') {
      combination = 'ru';
      keyboard.innerHTML = '';
      renderButtons(keyboard, combination);
    } else if (combination === 'key') {
      combination = 'shift';
      keyboard.innerHTML = '';
      renderButtons(keyboard, combination);
    } else if (combination === 'shift') {
      combination = 'key';
      keyboard.innerHTML = '';
      renderButtons(keyboard, combination);
    }
  }
}

function handleUp(e) {
  let butDown = document.querySelector(`.${e.code.toLowerCase()}`);
  butDown.classList.remove('active');
  // console.log(textArea.value);
}

body.onkeydown = handleDown;
body.onkeyup = handleUp;

function btnClick(event) {
  const arrBtnSpecial = [
    'Tab',
    'CapsLock',
    'Shift',
    'Ctrl',
    'Win',
    'Alt',
    'Backspace',
    'Delete',
    'Enter'
  ];
  let btn = event.target.closest('.button');
  if (!arrBtnSpecial.includes(btn.textContent)) {
    textArea.value += btn.textContent;
  }
}

keyboard.addEventListener('click', btnClick);
