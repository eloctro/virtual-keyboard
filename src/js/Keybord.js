export class Keyboard {
  constructor() {
    this.elem = document.createElement('div');
    this.class = 'keyboard';
  }

  appendTo(parent) {
    this.elem.classList.add(this.class);
    parent.appendChild(this.elem);
  }
}
