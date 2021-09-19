const { form } = document.forms;

function retrieveFormValue(event) {
    event.preventDefault();

    const { name, age, terms, plan } = form;

    const values = {
        name: name.value,
        age: age.value,
        terms: terms.checked,
        plan: plan.value
    };

    console.log(values);

}

form.addEventListener('submit', retrieveFormValue);