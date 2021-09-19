const form = document.getElementById('form');

function retrieveFormValue(event) {
    event.preventDefault();

    const name = document.querySelector('[name="name"]'),
        age = document.querySelector('[name="age"]'),
        terms = document.querySelector('[name="terms"]'),
        plan = document.querySelector('[name="plan"]');

    const values = {
        name: name.value,
        age: age.value,
        terms: terms.checked,
        plan: plan.value
    };

    console.log(values);
}

form.addEventListener('submit', retrieveFormValue);