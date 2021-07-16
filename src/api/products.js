import axios from "axios";
export const getProducts = async () => {
  let res = await axios({
    method: "get",
    url: "  http://localhost:5000/products",
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return res;
};

export const getAProduct = async (id) => {
  let res = await axios({
    method: "get",
    url: `http://localhost:5000/products/${id}`,
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return res;
};

export const addProduct = async (product) => {
  let res = await axios({
    method: "post",
    url: `http://localhost:5000/products/`,
    headers: { "content-type": "application/json" },
    data: JSON.stringify(product),
  }).catch((err) => console.log(err));
  return res;
};

export const changeProduct = async (id, product) => {
  let res = await axios({
    method: "put",
    url: `http://localhost:5000/products/${id}`,
    headers: { "content-type": "application/json" },
    data: JSON.stringify(product),
  }).catch((err) => console.log(err));
  return res;
};
export const deleteProduct = async (id) => {
  await axios({
    method: "delete",
    url: `http://localhost:5000/products/${id}`,
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
};
