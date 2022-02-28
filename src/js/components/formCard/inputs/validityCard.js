"use strict";

import IMask from "imask";

function inputValidityCard(inputId) {
  const validityCard = document.getElementById(inputId),
    validityMask = {
      mask: "MM{ / }YY",
      blocks: {
        MM: {
          mask: IMask.MaskedRange,
          from: 1,
          to: 12,
        },
        YY: {
          mask: IMask.MaskedRange,
          from: new Date().getFullYear().toString().slice(2),
          to: 99,
        },
      },
    };
  IMask(validityCard, validityMask);

  validityCard.addEventListener("input", function () {
    const currentYear = validityMask.blocks.YY.from,
      currentMonth = new Date().getMonth() + 1;

    if (
      this.value.slice(5) == currentYear &&
      +this.value.slice(0, 2) < currentMonth
    ) {
      let correctDate;

      currentMonth < 10
        ? (correctDate = `0${currentMonth}`)
        : (correctDate = currentMonth);
      this.value = this.value.replace(/^.{2}/, `${correctDate}`);
    }

    this.style.border = "";
  });
}

export default inputValidityCard;
