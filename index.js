const form = document.getElementById('form');
const button = document.getElementById('footer-button');
const closed = document.getElementById('footer-closed');

button.onclick = () => {
    form.classList.add('form-active');
}

closed.onclick = () => {
    form.classList.remove('form-active');
}