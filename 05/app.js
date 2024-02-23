const form = document.querySelector("form");
form.setAttribute("novalidate", "");
form.addEventListener("submit", formValidation);

function hasOnlyLetters(input) {
  if (/[A-Za-z]+$/.test(input)) {
    return true;
  }
}

function hasNumbers(input) {
  if (/[0-9]/.test(input)) {
    return true;
  }
}

function hasLetters(input) {
  if (/[A-Za-z]/.test(input)) {
    return true;
  }
}

function formValidation(evt) {
  evt.preventDefault();
  const error = [];
  const everyInput = Array.from(form.elements).slice(0, -1);
  const firstName = everyInput[0].value;
  const lastName = everyInput[1].value;
  const street = everyInput[2].value;
  const zip = everyInput[5].value;
  const city = everyInput[6].value;

  const hasBlankSpace = everyInput.some((ele) => {
    if (!ele.value) {
      return ele;
    }
  });

  if (hasBlankSpace) {
    error.push("Every box needs to be filled!");
  } else {
    if (!hasOnlyLetters(firstName)) {
      error.push(`You're first name should contain letters only!`);
    }
    if (!hasOnlyLetters(lastName)) {
      error.push(`You're last name should contain letters only!`);
    }
    if (!hasOnlyLetters(city)) {
      error.push(`City name should contain letters only!`);
    }
    if (hasNumbers(street)) {
      error.push(`Street name should not contain numbers!`);
    }
    if (hasLetters(zip)) {
      error.push("ZIP should not contain letters!");
    }
  }

  if (error.length === 0) {
    return alert("Done!");
  } else {
    return alert(error.join('\n'));
  }
}