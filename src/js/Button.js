export class Button {
  constructor(data, combination) {
    this.elem = document.createElement('div');
    this.class = 'button';
    this.classElem = data.code.toLowerCase();
    this.combination = combination;
    this.data = data[combination];
    // console.log(Object.keys(data));
  }

  appendTo(parent) {
    // console.log(this.data);
    this.elem.innerHTML = this.data;
    this.elem.classList.add(this.class);
    this.elem.classList.add(this.classElem);
    parent.appendChild(this.elem);
  }
}
