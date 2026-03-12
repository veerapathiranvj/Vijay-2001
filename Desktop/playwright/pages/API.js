const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://automationexercise.com/api/productsList", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));