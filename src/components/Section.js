export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._container = document.querySelector(containerSelector);
        this._items = items;
        this._renderer = renderer;
    }
    //метод, который отвечает за отрисовку всех элементов
    renderItems() {
        this._items.forEach(this._renderer) //осуществляется отрисовка каждого отдельного объекта
    }
    //метод, который принимает DOM-элемент и добавляет его в контейнер
    addItem(element) {
        this._container.prepend(element); //добавляет элемент в контейнер
    }
}