export default class Section {
    constructor({renderer }, containerSelector) {
        this._container = document.querySelector(containerSelector);
        this._renderer = renderer;
    }
    //метод, который отвечает за отрисовку всех элементов
    renderItems(data) {
        // data.forEach(this._renderer) //осуществляется отрисовка каждого отдельного объекта
        data.forEach((elem)=> {
            const card = this._renderer(elem)
            this._container.append(card)
        })
    }
    //метод, который принимает DOM-элемент и добавляет его в контейнер
    addItem(element) {
        const card = this._renderer(element);
        this._container.prepend(card); //добавляет элемент в контейнер
    }
}