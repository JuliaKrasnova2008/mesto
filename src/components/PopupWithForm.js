import Popup from "./Popup.js";


export default class PopupWithForm extends Popup {
    constructor({ selector, handleSubmitForm }) {
        super({ selector });
        this._handleSubmitForm = handleSubmitForm;
        this._form = this._popup.querySelector('form');
        this._inputList = this._form.querySelectorAll('.form__input')
    }

    //метод _getInputValues, который собирает данные всех полей формы.
    //в функциях с "get"(получить) обычно всегда возвращаем какое-то значение (return)
    _getInputValues() {
        const formData = {};
        this._inputList.forEach((inputElement) => {
            formData[inputElement.name] = inputElement.value;

        });
        return formData;

    }

    setInputValues(data) {
        this._inputList.forEach((input) => {
            input.value = data[input.name]
        })
    }

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitForm(this._getInputValues());
        });
        super.setEventListeners();
    }

    close() {
        this._form.reset();
        super.close();

    }
}