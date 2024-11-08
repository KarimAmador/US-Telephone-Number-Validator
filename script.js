const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');
const buttonsDiv = document.querySelector('.buttons-div');
const clearInputBtn = document.getElementById('clear-input-btn');

const numberValidation = (inputNum) => {
    const phoneRegex = /^1?(?:\s?\d{3}|\s?\(\d{3}\))[\s-]?\d{3}[\s-]?\d{4}$/;

    if (!inputNum) {
        alert('Please provide a phone number');
        return;
    }

    if (inputNum.match(phoneRegex)) {
        resultsDiv.innerHTML += `<p>Valid US number: ${inputNum}</p>`;
    } else {
        resultsDiv.innerHTML += `<p>Invalid US number: ${inputNum}</p>`;
    }
}

// Event listeners

userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        numberValidation(userInput.value)
    }
})
checkBtn.addEventListener('click', () => {
    numberValidation(userInput.value)
});
clearBtn.addEventListener('click', () => {
    resultsDiv.innerHTML = '';
});
buttonsDiv.addEventListener('click', (e) => {
    if (e.target && e.target.tagName === "BUTTON") {
        userInput.value += e.target.textContent;
    }
})
clearInputBtn.addEventListener('click', () => {
    userInput.value = '';
})