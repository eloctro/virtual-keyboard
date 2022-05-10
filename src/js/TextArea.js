export class TextArea {
  constructor() {
    this.div = document.createElement('div');
    this.divWrapClass = 'textarea__wrapper';
    this.elem = document.createElement('textarea');
    this.class = 'textarea';
  }

  appendTo(parent) {
    this.div.classList.add(this.divWrapClass);
    this.elem.classList.add(this.class);
    this.div.append(this.elem);
    parent.appendChild(this.div);
  }
}
