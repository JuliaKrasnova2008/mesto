export default class Section {
    constructor({renderer }, containerSelector) {
        this._container = document.querySelector(containerSelector);
        this._renderer = renderer;
    }
    //метод, который отвечает за отрисовку всех элементов
    renderItems(data) {
        data.forEach((elem)=> {
            this._renderer(elem)
        })
    }
    //метод, который принимает DOM-элемент и добавляет его в контейнер
    addItem(element) {
        this._container.prepend(element);
    }
}