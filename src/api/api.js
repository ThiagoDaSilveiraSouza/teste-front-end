export const getProducts = async () => {
  const config = {
    method: "GET",
  }
  return await fetch(
    "https://corebiz-test.herokuapp.com/api/v1/products",
    config
  ).then((response) => response.json().then((jsonResponse) => jsonResponse))
}

export const postUserEmail = async (userData) => {
  const userDataJSON = JSON.stringify(userData)
  console.log(userDataJSON)
  const config = {
    method: "POST",
    body: userDataJSON,
    redirect: "follow",
  }
  return fetch("https://corebiz-test.herokuapp.com/api/v1/newsletter", config)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error))
}

const userData = {
  email: "thiago@gmail.com",
  name: "thiago souza",
}

postUserEmail(userData)

