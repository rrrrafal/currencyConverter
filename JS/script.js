let inputCurrencyElement = document.querySelector(".js-inputCurrency");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");
let currencyIHaveElement = document.querySelector(".js-currencyIHave");
let currencyNeededElement = document.querySelector(".js-currencyNeeded");
const rate = 4.668;

currencyIHaveElement.addEventListener("input", () => {
    if (currencyIHaveElement.value === "EUR") {
        currencyNeededElement.value = "PLN";
        rateCurrency = 1 / rate;
    }
    else {
        currencyNeededElement.value = "EUR";
        rateCurrency = rate;
    }
});
currencyNeededElement.addEventListener("input", () => {
    if (currencyNeededElement.value === "PLN") {
        currencyIHaveElement.value = "EUR";
        rateCurrency = 1 / rate;
    }
    else {
        currencyIHaveElement.value = "PLN";
        rateCurrency = rate;
    }
});

formElement.addEventListener("submit", (even) => {
    even.preventDefault();
    let result = inputCurrencyElement.value * rateCurrency;
    resultElement.innerHTML = `${inputCurrencyElement.value} ${currencyIHaveElement.value} = <strong> ${result.toFixed(2)} ${currencyNeededElement.value} </strong>`;
}
);