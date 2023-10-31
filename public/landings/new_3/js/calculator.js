const rangeInputs = document.querySelectorAll('input[type="range"]')
const buttonsContainer = document.querySelector('.calculator__select-buttons')
const inputCalculator = document.getElementById("amount__number")
const inputCalculatorRange = document.querySelector(".amount__range")
const profitCalculator = document.querySelector(".profit")
const totalCalculator = document.querySelector(".total")
const percentageCalculator = document.querySelector(".percentage")

// mini state

let multiplicationNumberTotal = 1.1

// mini state

function changeBgInputRange(element, val, min, max) {
    element.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

function changeProfitCalculator() {
    const TotalValue = totalCalculator.innerText.replace(/[^0-9]/g, '')
    profitCalculator.innerText = `+${TotalValue - inputCalculator.value} $`
}

function changeTotalCalculator(value) {
    totalCalculator.innerText = `${Math.round(value)} $`
}

inputCalculator.oninput = function () {
    inputCalculatorRange.value = inputCalculator.value
    changeBgInputRange(inputCalculatorRange, inputCalculatorRange.value,
        inputCalculatorRange.min, inputCalculatorRange.max)
    changeTotalCalculator(inputCalculatorRange.value * multiplicationNumberTotal)
    changeProfitCalculator()

    if (inputCalculator.value === "") {
        inputCalculatorRange.value = 0
        changeBgInputRange(inputCalculatorRange, inputCalculatorRange.value,
            inputCalculatorRange.min, inputCalculatorRange.max)
    }

    if (inputCalculator.value > 10000) {
        inputCalculator.value = 10000
        changeBgInputRange(inputCalculatorRange, inputCalculatorRange.value,
            inputCalculatorRange.min, inputCalculatorRange.max)
    }
};

inputCalculatorRange.oninput = function () {
    inputCalculator.value = inputCalculatorRange.value
    changeBgInputRange(inputCalculatorRange, inputCalculatorRange.value,
        inputCalculatorRange.min, inputCalculatorRange.max)
    changeTotalCalculator(inputCalculatorRange.value * multiplicationNumberTotal)
    changeProfitCalculator()
}

function handleInputChange(e) {
    let target = e.target
    if (e.target.type !== 'range') {
        target = document.getElementById('range')
    }
    const min = target.min
    const max = target.max
    const val = target.value

    changeBgInputRange(target, val, min, max)
}

rangeInputs.forEach(input => {
    input.value = 0
    input.addEventListener('input', handleInputChange)
})

buttonsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains("calculator__select-btn")) {
        for (const child of buttonsContainer.children) {
            child.classList.remove("active")
        }
        e.target.classList.add("active")

        switch (e.target.innerText) {
            case "1 week":
                multiplicationNumberTotal = 1.1
                percentageCalculator.innerText = '10%'
                changeTotalCalculator(inputCalculatorRange.value * multiplicationNumberTotal)
                changeProfitCalculator()
                break

            case "2 week":
                multiplicationNumberTotal = 1.25
                percentageCalculator.innerText = '25%'
                changeTotalCalculator(inputCalculatorRange.value * multiplicationNumberTotal)
                changeProfitCalculator()
                break

            case "1 month":
                multiplicationNumberTotal = 1.7
                percentageCalculator.innerText = '70%'
                changeTotalCalculator(inputCalculatorRange.value * multiplicationNumberTotal)
                changeProfitCalculator()
                break

            case "3 month":
                multiplicationNumberTotal = 3.5
                percentageCalculator.innerText = '250%'
                changeTotalCalculator(inputCalculatorRange.value * multiplicationNumberTotal)
                changeProfitCalculator()
                break
        }
    }
})