// List products
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
