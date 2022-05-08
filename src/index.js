import { TextArea } from './js/TextArea';
import { Keyboard } from './js/Keybord';
import { ButtonRows } from './js/ButtonsRow';
import { Button } from './js/Button';
import { Data } from './js/Data';

const body = document.querySelector('body');

new TextArea().appendTo(body);

new Keyboard().appendTo(body);

const keyboard = document.querySelector('.keyboard');

// new ButtonRows().appendTo(keyboard);

// let buttonRows = document.querySelectorAll('.buttonRows');

for (let rows = 0; rows < 5; rows += 1) {
  new ButtonRows().appendTo(keyboard);
  let buttonRows = document.querySelectorAll('.buttonRows');
  Data[rows].forEach((elem) => {
    new Button(elem).appendTo(buttonRows[buttonRows.length - 1]);
  });
}

// for (let rows = 0; rows < 5; rows += 1) {
//   new ButtonRows().appendTo(keyboard);
//   let buttonRows = document.querySelectorAll('.buttonRows');
//   for (let index = 0; index < 10; index += 1) {
//     new Button().appendTo(buttonRows[buttonRows.length - 1]);
//   }
// }
