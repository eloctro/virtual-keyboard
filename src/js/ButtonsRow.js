export class ButtonsRow {
  constructor() {
    this.elem = document.createElement('div');
    this.class = 'buttonsRow';
  }

  appendTo(parent) {
    this.elem.classList.add(this.class);
    parent.appendChild(this.elem);
  }
}
