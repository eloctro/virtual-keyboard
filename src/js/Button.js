export class Button {
  constructor() {
    this.elem = document.createElement('div');
    this.class = 'button';
  }

  appendTo(parent) {
    this.elem.classList.add(this.class);
    parent.appendChild(this.elem);
  }
}
