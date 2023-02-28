const data = fetch("https://api.adviceslip.com/advice");

const advice_id = document.querySelector(".advice__id");
const advice_description = document.querySelector(".advice__description");

data.then((res) => res.json()).then((data) => {
    console.log(data);

    advice_id.textContent = data.slip.id;
    advice_description.textContent = data.slip.advice;
});
