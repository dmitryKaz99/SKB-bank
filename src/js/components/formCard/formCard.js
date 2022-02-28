"use strict";

import changeInputs from "./inputs/inputs";
import submitFormCard from "../submitForm";

function useFormCard() {
  changeInputs();
  submitFormCard(".data-card form");
}

export default useFormCard;
