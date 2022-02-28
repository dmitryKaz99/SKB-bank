"use strict";

import validationForm from "./validationForm";
import postData from "./postData";

function submitFormUser(formSelector) {
  const form = document.querySelector(formSelector),
    pasReplica = document.querySelector(".password-replica");

  form.addEventListener("submit", function (e) {
    if (validationForm(this)) {
      const formData = new FormData(this);
      formData.append("id", setIdForm(this));

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData("server.php", json)
        .then((data) => console.log(data))
        .catch((e) => console.log(e))
        .finally(() => {
          pasReplica ? (pasReplica.innerHTML = "") : null;
          this.reset();
        });
    } else {
      e.preventDefault();
    }
  });

  function setIdForm(form) {
    let idForm = +form.getAttribute("data-id");
    ++idForm;

    form.setAttribute("data-id", idForm);
    return idForm;
  }
}

export default submitFormUser;
