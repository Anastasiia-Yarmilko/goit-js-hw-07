const counter = document.querySelector('#counter');
const value = document.querySelector('#value');
const incrementAction = document.querySelector('[data-action="increment"]');
const decrementAction = document.querySelector('[data-action="decrement"]');
const incrementBttn = document.querySelector('button[data-action="increment"]');
const decrementBttn = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

const update = () => {
    value.textContent = counterValue;
};

const increment = () => {
    counterValue += 1;
    update();
};

const decrement = () => {
    counterValue -= 1;
    update();
};

incrementAction.addEventListener('click', increment);
decrementAction.addEventListener('click', decrement);

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса