{
    const inputCurrencyElement = document.querySelector(".js-inputCurrency");
    const resultElement = document.querySelector(".js-result");
    const formElement = document.querySelector(".js-form");
    const currencyFromElement = document.querySelector(".js-currencyFrom");
    const currencyToElement = document.querySelector(".js-currencyTo");
    const rate = 4.668;
    rateCurrency = 1 / rate;

    const changeFromSelect = () => {
        if (currencyFromElement.value === "EUR") {
            currencyToElement.value = "PLN";
            rateCurrency = rate;
        }
        else {
            currencyToElement.value = "EUR";
            rateCurrency = 1 / rate;
        }
    }

    const changeToSelect = () => {
        if (currencyToElement.value === "PLN") {
            currencyFromElement.value = "EUR";
            rateCurrency = rate;
        }
        else {
            currencyFromElement.value = "PLN";
            rateCurrency = 1 / rate;
        }
    }

    currencyFromElement.addEventListener("input", changeFromSelect);
    currencyToElement.addEventListener("input", changeToSelect);

    formElement.addEventListener("submit", (even) => {
        even.preventDefault();
        let result = inputCurrencyElement.value * rateCurrency;
        resultElement.innerHTML = `${inputCurrencyElement.value} ${currencyFromElement.value} = <strong> ${result.toFixed(2)} ${currencyToElement.value} </strong>`;
    }
    );
}