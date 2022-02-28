"use strict";

import inputCardNumber from "./cardNumbers";
import inputValidityCard from "./validityCard";
import inputSecretCode from "./secretCode";

function changeInputs() {
  inputCardNumber("card");
  inputValidityCard("date");
  inputSecretCode("cvv");
}

export default changeInputs;
