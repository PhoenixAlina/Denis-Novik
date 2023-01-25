const form = document.getElementById('form');
const buttonOpen = document.getElementById('footer-button');
const closed = document.getElementById('footer-closed');
const buttonSub = document.getElementById('form-button');
const allInputs = form.querySelectorAll(".input");

const clearInputs = () => {
    allInputs.forEach((input) => (input.value = null));
}

buttonOpen.onclick = () => {
    form.classList.add('form-active');
    buttonOpen.classList.add('button-remove');
}

closed.onclick = () => {
    form.classList.remove('form-active');
    buttonOpen.classList.remove('button-remove');
    clearInputs();
}

document.getElementById('form').addEventListener('submit', event => {
    event.preventDefault();
    alert('Сообщение отправлено!');
    form.classList.remove('form-active');
    buttonOpen.classList.remove('button-remove');
    clearInputs();
})

