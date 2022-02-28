"use strict";

function createPrompts(input, prompts) {
  const dropDownMenu = input.nextElementSibling;
  dropDownMenu.innerHTML = "";

  prompts.forEach((prompt) => {
    dropDownMenu.insertAdjacentHTML(
      "beforeend",
      `<option value="${prompt.value}"></option>`
    );
  });
}

export default createPrompts;
