let inputCurrencyElement = document.querySelector(".js-inputCurrency");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");
let currencyFromElement = document.querySelector(".js-currencyFrom");
let currencyToElement = document.querySelector(".js-currencyTo");
const rate = 4.668;
rateCurrency = 1 / rate;

currencyFromElement.addEventListener("input", () => {
    if (currencyFromElement.value === "EUR") {
        currencyToElement.value = "PLN";
        rateCurrency = 1 / rate;
    }
    else {
        currencyToElement.value = "EUR";
        rateCurrency = rate;
    }
});
currencyToElement.addEventListener("input", () => {
    if (currencyToElement.value === "PLN") {
        currencyFromElement.value = "EUR";
        rateCurrency = 1 / rate;
    }
    else {
        currencyFromElement.value = "PLN";
        rateCurrency = rate;
    }
});

formElement.addEventListener("submit", (even) => {
    even.preventDefault();
    let result = inputCurrencyElement.value * rateCurrency;
    resultElement.innerHTML = `${inputCurrencyElement.value} ${currencyFromElement.value} = <strong> ${result.toFixed(2)} ${currencyToElement.value} </strong>`;
}
);