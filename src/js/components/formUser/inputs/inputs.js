"use strict";

import getPrompts from "../api/api";
import createPrompts from "./prompts";

function changeInputs(inputId, currentUrl, key) {
  const input = document.getElementById(inputId);

  input.addEventListener("input", function () {
    const regEng = /[a-z]/gi,
      regNum = /[0-9]/g;

    this.value.match(regEng)
      ? (this.value = this.value.replace(regEng, ""))
      : null;

    this.name === "name" ? (this.value = this.value.replace(regNum, "")) : null;

    getPrompts(currentUrl, key, this.value).then((data) =>
      createPrompts(this, data)
    );

    this.style.border = "";
  });
}

export default changeInputs;
