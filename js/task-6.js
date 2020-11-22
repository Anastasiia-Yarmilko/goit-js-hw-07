const validationInput = document.querySelector('#validation-input');

validationInput.onblur = function() {
    if (validationInput.value.length !== 6) {
        this.classList.add("invalid");

    } else if (validationInput.value.length === 6) {
        this.classList.remove("invalid");
        this.classList.add("valid");
    }
}

    


// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей используй CSS-классы valid и invalid.
