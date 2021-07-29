const buttons = document.querySelectorAll('.number, .operator')
const display = document.querySelector('.calculator-display')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')

displayData = ''

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttonValue = button.getAttribute('value')
        displayData += buttonValue
        display.innerHTML = displayData
        console.log(displayData)
    })
});

equals.addEventListener('click', () => {
    display.innerHTML = eval(displayData) 
})

clear.addEventListener('click', () => {
    displayData = ''
    display.innerHTML = displayData
})
