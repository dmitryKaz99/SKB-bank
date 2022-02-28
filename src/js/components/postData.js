"use strict";

async function postData(url, data) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  };

  const response = await fetch(url, options);
  return await response.text();
}

export default postData;
