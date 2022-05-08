import { Keyboard } from './js/keybord';
import { ButtonRows } from './js/buttonsRow';
import { Button } from './js/button';

const body = document.querySelector('body');
// eslint-disable-next-line no-console
new Keyboard().appendTo(body);

const keyboard = document.querySelector('.keyboard');

for (let rows = 0; rows < 5; rows += 1) {
  new ButtonRows().appendTo(keyboard);
  let buttonRows = document.querySelectorAll('.buttonRows');
  for (let index = 0; index < 10; index += 1) {
    new Button().appendTo(buttonRows[buttonRows.length - 1]);
  }
}
