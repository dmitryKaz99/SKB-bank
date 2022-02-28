"use strict";

function validationForm(form) {
  const inputs = [...form.querySelectorAll("input")];

  inputs.forEach((input) =>
    setCondition(input) ? (input.style.border = "1px solid red") : null
  );
  const flag = inputs.every((input) => (setCondition(input) ? false : true));

  function setCondition(input) {
    return (
      +input.getAttribute("data-length") > +input.value.length ||
      input.value === ""
    );
  }

  return flag;
}

export default validationForm;
