//2. проверка валидности. Для этого созд функции п.3
const myFormProfileValidators = {
  userName: validateUserName,
  aboutUser: validateAboutUser,
};
const myFormAddValidators = {
  titleForm: validatetitleForm,
  linkForm: validatelinkForm,
};

const myformProfile = document.querySelector("#formProfile");
enableValidation(myformProfile, myFormProfileValidators);
const myformAdd = document.querySelector("#formAdd");
enableValidation(myformAdd, myFormAddValidators);

function enableValidation(form, validators) {
  const inputsContainer = form.querySelector(".form__inputs");

  //1.создаем функцию, как параметры добавляем ключ и значение
  function validate(key, value) {
    const validator = validators[key];
    return validator(value);
  }

  //
  function setError(key, errorMessage) {

    const inputEl = inputsContainer.querySelector(`.popup__text[name=${key}]`);
    let errorEl = inputsContainer.querySelector(
      `.popup__text-error[data-key=${key}]`
    );
    let buttonSubmit = form.querySelector(".popup__submit-btn");

    if (!errorEl) {
      errorEl = document.createElement("p");
      inputEl.after(errorEl);
    }
    inputEl.classList.add("popup__text-input-invalid");
    errorEl.classList.add("popup__text-error");
    buttonSubmit.classList.add("popup__submit-btn_disable");
    buttonSubmit.setAttribute("disabled", true);
    errorEl.dataset.key = key;
    errorEl.textContent = errorMessage;
  }

  //очистка валидации
  function clearError(key, formData) {
    const inputEl = inputsContainer.querySelector(`.popup__text[name=${key}]`);
    inputEl.classList.remove("popup__text-input-invalid");

    const errorEl = inputsContainer.querySelector(
      `.popup__text-error[data-key=${key}]`
    );
    errorEl?.remove();

    let isValid = true;
    formData.forEach((value, key) => {
      const errorMessage = validate(key, value); //каждый элемент проверяем
      if (errorMessage) {
        isValid = false; //если нашел ошибку, т.е. форма не валидна
      }
    });
    //если нет ошибки
    if (isValid) {
      let buttonSubmitPrifile = form.querySelector(".popup__submit-btn");
      buttonSubmitPrifile.classList.remove("popup__submit-btn_disable");
      buttonSubmitPrifile.removeAttribute("disabled");
    }
  }

  form.addEventListener("input", (e) => {
    const key = e.target.name;
    const value = e.target.value;
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData);

    const errorMessage = validate(key, value);

    //Ошибки при заполнении формы
    //если нет ошибки
    if (!errorMessage) {
      e.target.onblur = () => {
        e.target.dataset.dirty = "true";
      };
      clearError(key, formData);

      return;
    }
    // есть ошибка
    if (e.target.dataset.dirty === "true") {
      setError(key, errorMessage);
      return;
    }
    // есть ошибка, но мы еще не ушли с поля
    e.target.onblur = () => {
      e.target.dataset.dirty = "true";
      setError(key, errorMessage);
    };
  });

  //Ошибки при сабмите,т.е. при отправке формы
  form.addEventListener("submit", (e) => {
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData);

    let isFormValid = true;

    formData.forEach((value, key) => {
      const errorMessage = validate(key, value); //каждый элемент проверяем

      //если нет ошибки
      if (!errorMessage) {
        return;
      }
      setError(key, errorMessage);
      const inputEl = inputsContainer.querySelector(
        `.popup__text[name=${key}]`
      );

      inputEl.dataset.dirty = "true";

      isFormValid = false; //если хоть одно поле будет false, то первоначальное true поменяется на false и дальше будет false
    });

    if (!isFormValid) {
      e.preventDefault();
      return;
    }
  });
}

/*-----------------------------function----------------------*/
//3.функции,которые отвечают за валидацию. По ключу функция определяет,какую функцию нам нужно вызвать, вызывает ее,
//получает от туда данные(true/false) и возвращает
function validateUserName(value) {
  //если знаечения нет-возвращаем false/текст ошибки
  if (!value) {
    return "Вы пропустили это поле.";
  }
  //если значение <2-возвращаем false/текст ошибки, ?-если length нет у value, то не проверяется
  if (value?.length < 2) {
    return (
      "Минимальное количество символов: 2. Длина текста сейчас: " +
      value?.length +
      " символ."
    );
  }
  //если значение >40-возвращаем false/текст ошибки
  if (value?.length > 40) {
    return (
      "Максимальное количество символов: 40. Длина текста сейчас: " +
      value?.length +
      " символ."
    );
  }

  return null; //функция работает до первого ретерн, если ретерн/текст ошибки срабатывает,то код дальше не идет, если всё ок,то доходит до true
}

function validateAboutUser(value) {
  if (!value) {
    return "Вы пропустили это поле.";
  }
  //если значение <2-возвращаем false/текст ошибки, ?-если length нет у value, то не проверяется
  if (value?.length < 2) {
    return (
      "Минимальное количество символов: 2. Длина текста сейчас: " +
      value?.length +
      " символ."
    );
  }
  //если значение >40-возвращаем false/текст ошибки
  if (value?.length > 200) {
    return (
      "Максимальное количество символов: 200. Длина текста сейчас: " +
      value?.length +
      " символ."
    );
  }

  return null;
}

function validatetitleForm(value) {
  if (!value) {
    return "Вы пропустили это поле.";
  }
  //если значение <2-возвращаем false/текст ошибки, ?-если length нет у value, то не проверяется
  if (value?.length < 2) {
    return (
      "Минимальное количество символов: 2. Длина текста сейчас: " +
      value?.length +
      " символ."
    );
  }
  //если значение >30-возвращаем false/текст ошибки
  if (value?.length > 30) {
    return (
      "Максимальное количество символов: 30. Длина текста сейчас: " +
      value?.length +
      " символ."
    );
  }
  return null;
}

function validatelinkForm(value) {
  if (!value) {
    return "Вы пропустили это поле.";
  }
  //регулярку можно делать на сайте https://regex101.com
  if (
    !/(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?/.test(value)
  ) {
    return "Введите адрес сайта.";
  }
  return null;
}
