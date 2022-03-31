/* export async function postData(url = "", data = {}) {
  // Opciones por defecto estan marcadas con un *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}*/

export const AVAILABLE_TAGS = [
    {key: "angular", label: "Angular"},
    {key: "hibernate", label: "Hibernate"},
    {key: "java", label: "java"},
    {key: "html_css", label: "html&css"},
    {key: "python", label: "python"},
    {key: "git", label: "git"},
    {key: "react", label: "react"},
    {key: "spring", label: "spring"},
];

//export const API_URL = "http://localhost:9033/api";
export const API_URL = "https://61f816ed783c1d0017c445c3.mockapi.io/api";

export const getTagObjectFromKey = (key) => {
    return AVAILABLE_TAGS.find((tag) => tag.key === key);
};
