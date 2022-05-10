import { ButtonsRow } from './ButtonsRow';
import { Button } from './Button';
import { Data } from './Data';

export function renderButtons(parent, combination) {
  for (let rows = 0; rows < 5; rows += 1) {
    new ButtonsRow().appendTo(parent);
    let buttonsRow = document.querySelectorAll('.buttonsRow');
    Data[rows].forEach((elem) => {
      new Button(elem, combination).appendTo(buttonsRow[buttonsRow.length - 1]);
    });
  }
}
