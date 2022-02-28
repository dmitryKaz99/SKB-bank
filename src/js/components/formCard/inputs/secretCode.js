"use strict";

import IMask from "imask";

function inputSecretCode(inputId) {
  const secretCode = document.getElementById(inputId),
    secretCodeMask = {
      mask: "000",
    };
  IMask(secretCode, secretCodeMask);

  secretCode.addEventListener("input", function () {
    const pasReplica = document.querySelector(".password-replica"),
      replicaText = Array(this.value.length).fill("*").join("");

    pasReplica.innerHTML = replicaText;
    this.style.border = "";
  });
}
export default inputSecretCode;
