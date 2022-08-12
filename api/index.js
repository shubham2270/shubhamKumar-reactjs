// -- Products api's --

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNodWJoYW0yMjcwQGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9zaHViaGFtMjI3MCIsImlhdCI6MTY2MDE5MjQ2NSwiZXhwIjoxNjYwNjI0NDY1fQ.JhSdZ3Z8MtXtAbiPq1B5TNshmKshAs1Eli2uK2hFNjc";

export const listProducts = async () => {
  const getProductUrl =
    "https://upayments-studycase-api.herokuapp.com/api/products";
  const headers = {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  };

  const response = await fetch(getProductUrl, { headers });
  const data = await response.json();
  return data;
};

export const getProduct = async (id) => {
  const getProductUrl = `https://upayments-studycase-api.herokuapp.com/api/products/${id}`;
  const headers = {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  };

  const response = await fetch(getProductUrl, { headers });
  const data = await response.json();
  return data;
};

export const addProduct = async (productData) => {
  const getProductUrl = `https://upayments-studycase-api.herokuapp.com/api/products/`;
  const headers = {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  };

  const response = await fetch(getProductUrl, {
    method: "POST",
    body: JSON.stringify(productData),
    headers,
  });
  const data = await response.json();
  return data;
};

// -- Categories api's --

export const listCategories = async () => {
  const getCategoriesUrl =
    "https://upayments-studycase-api.herokuapp.com/api/categories/";
  const headers = {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  };

  const response = await fetch(getCategoriesUrl, { headers });
  const data = await response.json();
  return data;
};

export const getCategory = async (id) => {
  const getCategoryUrl = `https://upayments-studycase-api.herokuapp.com/api/categories/${id}`;
  const headers = {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  };

  const response = await fetch(getCategoryUrl, { headers });
  const data = await response.json();
  return data;
};
