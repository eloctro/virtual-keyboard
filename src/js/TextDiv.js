export class TextDiv {
  constructor() {
    this.elem = document.createElement('div');
    this.a = document.createElement('a');
    this.class = 'textDiv';
    this.p = document.createElement('p');
  }

  appendTo(parent) {
    this.elem.innerHTML = 'Ссылка на PR: ';
    this.a.href = 'https://github.com/eloctro/virtual-keyboard/pull/2';
    this.a.target = '_blank';
    this.a.innerHTML = 'https://github.com/eloctro/virtual-keyboard/pull/2';
    this.p.innerHTML = 'Переключение языков CTRL + ALT';
    this.elem.append(this.a);
    this.elem.append(this.p);
    this.elem.classList.add(this.class);
    parent.appendChild(this.elem);
  }
}
