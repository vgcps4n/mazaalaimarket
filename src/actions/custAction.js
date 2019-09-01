import axios from "axios";

export const getBanners = () => {
  return axios.get("/mazaalaimarket/api/banner");
};

export const getProducts = () => {
  return axios.get("/mazaalaimarket/api/product");
};

export const getAds = () => {
  return axios.get("/mazaalaimarket/api/ad");
};
