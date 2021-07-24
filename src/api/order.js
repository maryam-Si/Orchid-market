import axios from "axios";
export const getOrders = async () => {
  const res = await axios({
    method: "get",
    url: "  http://localhost:5000/orders",
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return res;
};

export const getAOrder = async (id) => {
  let res = await axios({
    method: "get",
    url: `http://localhost:5000/orders/${id}`,
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return res;
};

export const changeOrder = async (id, order) => {
  let res = await axios({
    method: "put",
    url: `http://localhost:5000/orders/${id}`,
    headers: { "content-type": "application/json" },
    data: JSON.stringify(order),
  });
  return res;
};
