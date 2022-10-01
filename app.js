/* eslint-disable no-console */
// DOM - document object model
// built into your browser -- its a JS representation of your HTML

// DOM GETTER METHODS
// getElementById
const nameDisplay = document.getElementById('name');
console.log(nameDisplay);

// DOM SETTER METHODS
// textContent
nameDisplay.textContent = 'Julie';
nameDisplay.classList.add('purple');

const updateBtn = document.getElementById('update-btn');
updateBtn.addEventListener('click', () => {
    console.log('i am clicking the button');
    // grab the input element
    const nameInput = document.getElementById('name-input');
    // set the display to the value from the input
    nameDisplay.textContent = nameInput.value;
});
