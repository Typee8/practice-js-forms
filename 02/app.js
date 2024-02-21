const form = document.querySelector("form");

form.addEventListener("submit", formValidation);

function formValidation(e) {
  e.preventDefault();
  const errors = [];
  const email = e.target.elements.login;
  const pass1 = e.target.elements.pass1;
  const pass2 = e.target.elements.pass2;
  const acceptForm = e.target.elements.accept;

  if (pass1.value.length <= 6) {
    errors.push(pass1);
  }
  if (pass1.value.length <= 6 || pass2.value !== pass1.value) {
    errors.push(pass2);
  }
  if (!/@/.test(email.value)) {
    errors.push(email);
  }
  if (!acceptForm.checked) {
    errors.push(acceptForm);
  }

  if (errors.length === 0) {
    return console.log("done.");
  } else {
    e.preventDefault();
    errors.forEach((ele) => {
      ele.previousElementSibling.style.color = 'red';
    });
  }
}
