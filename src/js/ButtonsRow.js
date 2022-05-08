export class ButtonRows {
  constructor() {
    this.elem = document.createElement('div');
    this.class = 'buttonRows';
  }

  appendTo(parent) {
    this.elem.classList.add(this.class);
    parent.appendChild(this.elem);
  }
}
