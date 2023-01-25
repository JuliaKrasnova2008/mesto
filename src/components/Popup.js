export default class Popup {
    constructor({ selector }) {
        this._popup = document.querySelector(selector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    //публичный метод, который отвечает за открытие попапа
    open() {
        this._popup.classList.add("popup_opened");
        document.addEventListener("keydown", this._handleEscClose)
    }
    //публичный метод, который отвечает за открытие попапа
    close() {
        this._popup.classList.remove("popup_opened");
        document.removeEventListener("keydown", this._handleEscClose);
    }
    //приватный метод, который содержит логику закрытия попапа клавишей Esc
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    //публичный метод, который добавляет слушатель клика иконке закрытия попапа
    //+ закрытие модального окна при клике на затемненную область
    setEventListeners() {
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains("popup__close") ||
            evt.target.classList.contains("popup_opened")) {
                this.close();
            }
        });

    }
}