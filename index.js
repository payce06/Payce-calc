const display = document.getElementById("display")
const historyList = document.getElementById("historyList")


const appendToDisplay = (val) => {
    if (display.value.includes("Error")) {
        clearDisplay()
    } else if (display.value.includes("=")) {
        clearDisplay()
    }
    display.value += val
}


const clearDisplay = () => {
    display.value = ''
}

const calculate = () => {
    try {
        const result = eval(display.value)
        display.value += ` = ${result}`
        addToHistory()
    } catch (error) {
        console.log("Error in calculating output", error.message)
        display.value = 'Error'
    }
}


const addToHistory = () => {
    const historyItem = document.createElement("li")
    historyItem.textContent = `${display.value}`
    historyList.insertBefore(historyItem, historyList.firstChild)
}


document.addEventListener('keydown', (event) => {
    if ((event.key >= 0 && event.key <= 9)) {
        appendToDisplay(event.key)
    } else if (event.key === '+' || event.key === '-' || event.key === '/' || event.key === '+') {
        appendToDisplay(event.key)
    } else if (event.key === 'Enter' || event.key === '=') {
        calculate()
    } else if (event.key === 'Backspace') {
        display.value = display.value.slice(0, -1)
    } else if (event.key === 'Escape') {
        clearDisplay()
    }
})