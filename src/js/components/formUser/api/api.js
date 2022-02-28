"use strict";

async function getPrompts(url, token, query) {
  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Token " + token,
    },
    body: JSON.stringify({ query: query }),
  };

  const response = await fetch(url, options),
    result = await response.json();

  if (!response.ok) {
    throw new Error(`Could not fetch ${url}, status: ${response.status}`);
  }

  return result.suggestions;
}

export default getPrompts;
