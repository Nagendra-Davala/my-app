import apiService from "./ApiService";
export const getProducts = () => {
  const url =
    "https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json";
  return apiService.get(url);
};
