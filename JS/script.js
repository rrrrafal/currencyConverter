{
    const inputCurrencyElement = document.querySelector(".js-inputCurrency");
    const resultElement = document.querySelector(".js-result");
    const formElement = document.querySelector(".js-form");
    const currencyFromElement = document.querySelector(".js-currencyFrom");
    const currencyToElement = document.querySelector(".js-currencyTo");
    const rate = 4.668;
    rateCurrency = 1 / rate;

    currencyFromElement.addEventListener("input", () => {
        if (currencyFromElement.value === "EUR") {
            currencyToElement.value = "PLN";
            rateCurrency = rate;
        }
        else {
            currencyToElement.value = "EUR";
            rateCurrency = 1 / rate;

        }
    });
    currencyToElement.addEventListener("input", () => {
        if (currencyToElement.value === "PLN") {
            currencyFromElement.value = "EUR";
            rateCurrency = rate;
        }
        else {
            currencyFromElement.value = "PLN";
            rateCurrency = 1 / rate;
        }
    });

    formElement.addEventListener("submit", (even) => {
        even.preventDefault();
        const result = inputCurrencyElement.value * rateCurrency;
        resultElement.innerHTML = `${inputCurrencyElement.value} ${currencyFromElement.value} = <strong> ${result.toFixed(2)} ${currencyToElement.value} </strong>`;
    }
    );
}