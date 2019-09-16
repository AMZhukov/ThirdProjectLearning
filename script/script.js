let selector = prompt('введите селектор начиная с точки или #'),
    height = prompt('введите требуемую высоту height, в пикселях'),
    width = prompt('введите требуемую ширину width, в пикселях'),
    bg = prompt('Введите требуемый цвет фона'),
    fontsize = prompt('введите размер шрифта, в пикселях');

function DomElement () {
    this.selector = selector;
    this.bg = bg;
    this.height = height;
    this.width = width;
    this.fontSize = fontsize;
};
//creareelement p или div
DomElement.prototype.createDivOrP = function () {
    let divOrP = null;
    if (this.selector.charAt(0) == '.') {
        divOrP = document.createElement('div');
        divOrP.className = this.selector;
        divOrP.innerHTML = 'Элемент Div';
        divOrP.style.cssText = 'height:' + this.height + 'px; width:' + this.width + 'px; background:' + this.bg + '; font-size: ' + this.fontSize + 'px;';
        document.body.appendChild(divOrP);
    }
    else if (this.selector.charAt(0) == '#') {
        divOrP = document.createElement('p');
        divOrP = this.selector;
        divOrP.innerHTML = 'Элемент P';
        divOrP.style.cssText = 'height:' + this.height + 'px; width:' + this.width + 'px; background:' + this.bg + '; font-size: ' + this.fontSize + 'px;';
        document.body.appendChild(divOrP);
    }
    else {
        document.write('Неверно передан селектор');
    }
};

const domElement = new DomElement();

domElement.createDivOrP();


