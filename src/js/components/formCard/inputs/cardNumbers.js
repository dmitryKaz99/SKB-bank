"use strict";

import IMask from "imask";
import algorithmMoon from "../algorithm/algorithm";

function inputCardNumbers(inputId) {
  const cardNumbers = document.getElementById(inputId),
    cardNumberMask = {
      mask: "0000 0000 0000 0000",
    };
  IMask(cardNumbers, cardNumberMask);

  cardNumbers.addEventListener("input", function () {
    this.value.length === 18 ? (this.value += algorithmMoon(this.value)) : null;
    this.style.border = "";
  });
}

export default inputCardNumbers;
