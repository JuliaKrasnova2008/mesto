export default class Card {
    constructor(data, cardConfig, templateSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._titleSelector = cardConfig.titleSelector;
        this._imgSelector = cardConfig.imgSelector;
        this._btnLikeSelector = cardConfig.btnLikeSelector;
        this._btnDeleteSelector = cardConfig.btnDeleteSelector;
        this._handleCardClick = handleCardClick;
    }
    //функция, которая генерит шаблон карточки
    _createTemplate() {
        const template = document.querySelector(this._templateSelector).content
        const card = template.querySelector(".elements__card").cloneNode(true)

        return card;
    }

    //метод для заполнения данными карточки
    _setData() {
        const title = this._cardElem.querySelector(this._titleSelector)
        this._img = this._cardElem.querySelector(this._imgSelector)

        title.textContent = this._name;
        this._img.src = this._link;
        this._img.alt = this._name;
    }

    //метод, который меняет активное состояние
    _toggleCardActive() {
        this._btnLike.classList.toggle("elements__favorite_active")
    }
    //метод, который удаляет карточку
    _deleteCard() {
        this._cardElem.remove()
        this._cardElem = null;
    }

    //метод для проставления слушателей событий
    _setListeners() {
        this._btnLike = this._cardElem.querySelector(this._btnLikeSelector)
        this._btnLike.addEventListener('click', () => this._toggleCardActive())
        this._cardElem.querySelector(this._btnDeleteSelector).addEventListener('click', () => this._deleteCard())
        this._img.addEventListener('click', () => this._handleCardClick(this._name, this._link))

    }


    //метод создания карточки из шаблона(публичный метод)
    generateCard() {
        this._cardElem = this._createTemplate();
        this._setData();
        this._setListeners();

        return this._cardElem;
    }
}