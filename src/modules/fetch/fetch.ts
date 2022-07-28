const BASE_URL: IBase_URL = {
  baseUrl: "http://localhost:3000",
  additionalURL: "/garage",
  method: "GET",
  headers: "",
  body: "",
};

interface IBase_URL {
  baseUrl: string;
  additionalURL: string;
  method: string;
  headers: string;
  body: string;
}

export const fetchRequest = async ({
  baseUrl,
  additionalURL,
  method,
  headers,
  body,
}: IBase_URL) => {
  try {
    let response;
    if (method === "GET" || method === "PATCH") {
      response = await fetch(`${baseUrl}${additionalURL}`);
    } else {
      response = await fetch(`${baseUrl}${additionalURL}`, {
        method: method,
        headers: {
          headers,
        },
        body: body,
      });
    }
    const json = await response.json();
    console.log(json);
  } catch {
    console.error(Error("fetch"));
  }
};
fetchRequest(BASE_URL);
