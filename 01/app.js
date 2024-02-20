const formEl = document.querySelector("form");
const namesPlace = document.querySelector(".users-list");

formEl.addEventListener("submit", submitName);

function submitName(e) {
  e.preventDefault();
  const firstName = e.target.elements.firstName.value;
  const lastName = e.target.elements.lastName.value;

  if (isNameValid(firstName, lastName)) {
    const li = document.createElement("li");
    li.classList.add("users-list__person");
    li.innerText = firstName + " " + lastName;
    namesPlace.appendChild(li);
  }
}

function isNameValid(firstName, lastName) {
  const firstNameCheck = /^[a-zA-Z]+$/.test(firstName);
  const lastNameCheck = /^[a-zA-Z]+$/.test(lastName);

  if (firstNameCheck && lastNameCheck) {
    return true;
  } else {
    return false;
  }
}
