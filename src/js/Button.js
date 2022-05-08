export class Button {
  constructor(data) {
    this.elem = document.createElement('div');
    this.class = 'button';
    this.data = Object.keys(data);
    console.log(Object.keys(data));
  }

  appendTo(parent) {
    // console.log(this.data);
    this.elem.innerHTML = this.data
    this.elem.classList.add(this.class);
    parent.appendChild(this.elem);
  }
}
