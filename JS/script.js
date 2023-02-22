{
    const inputCurrencyElement = document.querySelector(".js-inputCurrency");
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
    const updateResultText = (inputCurrencyElement, currencyFromElement, currencyToElement, result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${inputCurrencyElement.value} ${currencyFromElement.value} = <strong> ${result.toFixed(2)} ${currencyToElement.value} </strong>`;
    }
    const onFormSubmit = (even) => {
        even.preventDefault();
        const result = inputCurrencyElement.value * rateCurrency;
        updateResultText(inputCurrencyElement, currencyFromElement, currencyToElement, result);
    }
    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
        currencyFromElement.addEventListener("input", changeFromSelect);
        currencyToElement.addEventListener("input", changeToSelect);
    }

    init();

}