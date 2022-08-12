// -- Products api's --

export const listProducts = async () => {
  const getProductUrl =
    "https://upayments-studycase-api.herokuapp.com/api/products";
  const headers = {
    Authorization: "Bearer " + process.env.NEXT_PUBLIC_API_TOKEN,
    "Content-Type": "application/json",
  };

  const response = await fetch(getProductUrl, { headers });
  const data = await response.json();
  return data;
};

export const getProduct = async (id) => {
  const getProductUrl = `https://upayments-studycase-api.herokuapp.com/api/products/${id}`;
  const headers = {
    Authorization: "Bearer " + process.env.NEXT_PUBLIC_API_TOKEN,
    "Content-Type": "application/json",
  };

  const response = await fetch(getProductUrl, { headers });
  const data = await response.json();
  return data;
};

export const addProduct = async (productData) => {
  const getProductUrl = `https://upayments-studycase-api.herokuapp.com/api/products/`;
  const headers = {
    Authorization: "Bearer " + process.env.NEXT_PUBLIC_API_TOKEN,
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
    Authorization: "Bearer " + process.env.NEXT_PUBLIC_API_TOKEN,
    "Content-Type": "application/json",
  };

  const response = await fetch(getCategoriesUrl, { headers });
  const data = await response.json();
  return data;
};

export const getCategory = async (id) => {
  const getCategoryUrl = `https://upayments-studycase-api.herokuapp.com/api/categories/${id}`;
  const headers = {
    Authorization: "Bearer " + process.env.NEXT_PUBLIC_API_TOKEN,
    "Content-Type": "application/json",
  };

  const response = await fetch(getCategoryUrl, { headers });
  const data = await response.json();
  return data;
};
