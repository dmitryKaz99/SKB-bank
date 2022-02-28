"use strict";

import submitFormUser from "../submitForm";
import changeInputs from "./inputs/inputs";
import config from "./api/apiConfig";

function useFormUser() {
  const inputsData = [
    {
      selector: "name",
      url: config.urlName,
    },
    {
      selector: "adress",
      url: config.urlAdress,
    },
  ];

  inputsData.forEach((input) =>
    changeInputs(input.selector, input.url, config.key)
  );
  submitFormUser(".data-user form");
}

export default useFormUser;
