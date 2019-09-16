let start = document.querySelector('.buttonOne'),
    selectorIntro = document.querySelector('.intro'),
    selectorOutro = document.querySelector('.outro');




const DomElement = function () {
    this.bg = 'background-color: gray; ';
    this.height = 'height: 100px; ';
    this.width = 'width: 100px; ';
    this.fontSize = 'font-size: 30px; ';
};

DomElement.prototype.func = function () {
    let temp = null,
        typeDivOrP = null;
    if (selectorIntro.value[0] === '.') {
        typeDivOrP = 'p';
    } else if (selectorIntro.value[0] === '#') {
        typeDivOrP = 'div';
    } else return;
    selectorOutro.style.cssText = this.bg + this.height + this.width + this.fontSize;
    temp = '<' + typeDivOrP + ' class="outro">' + _this.selectorIntro.value + '</' + typeDivOrP + '>';
    selectorOutro.innerHTML = temp;
};

const domElement = new DomElement();

start.addEventListener('click', domElement.func.bind(domElement));

