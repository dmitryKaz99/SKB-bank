"use strict";

import useFormUser from "./components/formUser/formUser";
import useFormCard from "./components/formCard/formCard";

document.addEventListener("DOMContentLoaded", () => {
  try {
    useFormUser();
  } catch (e) {
    useFormCard();
  }
});
