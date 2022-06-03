const mainView = document.querySelector('.main');
const rateButtons = document.querySelectorAll('.main__buttons-rate');
const changeView = document.querySelector('.second__card');
const submitButton = document.querySelector('.main__button-submit');
const selectRateError = document.querySelector('.main__text-select');

rateButtons.forEach(button => {
    button.addEventListener('click', () => {
        rateButtons.forEach(button => {
            button.classList.remove('rate-selected');
        });
        button.classList.add('rate-selected');
    });
});

const secondCardView = rateValue => {
    const html = `
        <div class="main__card">
            <div class="main__image">
                <img src="/images/illustration-thank-you.svg" alt="Rate start" />
            </div>
            <div class="rate__information">You selected ${rateValue} out of 5</div>
            <div class="main__text-second">
                <h1>Thank you!</h1>
                <p>
                    We appreciate you taking the time to give a rating. <br />
                    if you ever need more support, don't hesitate to <br />
                    get it touch.
                </p>
            </div>
        </div>
    `

    changeView.innerHTML = html;
    mainView.classList.add('element__hidden');
    changeView.classList.remove('element__hidden');
}

submitButton.addEventListener('click', () => {
    rateButtons.forEach(button => {
        if (button.classList.contains('rate-selected')) {
            let rated = button.textContent.trim();
            secondCardView(rated);
        } else {
            selectRateError.classList.remove('element__hidden')
        }
    });
});
