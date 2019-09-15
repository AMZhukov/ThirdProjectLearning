let start = document.querySelector('.buttonOne');

const DomElement = function () {
    this.selectorIntro = document.querySelector('.intro');
    this.selectorOutro = document.querySelector('.outro');
    this.bg = 'background-color: gray; ';
    this.height = 'height: 100px; ';
    this.width = 'width: 100px; ';
    this.fontSize = 'font-size: 30px; ';
};

DomElement.prototype.func = function () {
    let temp = null,
        typeDivOrP = null;
    const _this = this;
    if (this.selectorIntro.value[0] === '.') {
        typeDivOrP = 'p';
    } else if (this.selectorIntro.value[0] === '#') {
        typeDivOrP = 'div';
    } else return;
    _this.selectorOutro.style.cssText = this.bg + this.height + this.width + this.fontSize;
    temp = '<' + typeDivOrP + ' class="outro">' + _this.selectorIntro.value + '</' + typeDivOrP + '>';
    this.selectorOutro.innerHTML = temp;
};

const domElement = new DomElement();

start.addEventListener('click', domElement.func.bind(domElement));

