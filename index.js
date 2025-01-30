const nameValue = document.getElementById('name');
const lastName = document.getElementById('lastName');
const numbervalue = document.getElementById('number');
const emailValue = document.getElementById('email')
const formElement = document.getElementById('formElement')

formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(nameValue.value)
})
