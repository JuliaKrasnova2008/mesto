import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
        this._popupImg = this._popup.querySelector('.popup__image-preview');
        this._popupTitle = this._popup.querySelector('.popup__title-img');
    }
    open(name, src) {
        this._popupTitle.textContent = name;
        this._popupImg.src = src;
        this._popupImg.alt = name;
        super.open();
    }

}