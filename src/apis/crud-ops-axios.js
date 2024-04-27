import axios from "axios";

const instance = axios.create({
  baseURL: "https://6624eb0804457d4aaf9d50b2.mockapi.io/items",
  timeout: 10000,
  headers: {
    "X-Custom-Header": "foobar",
    mentor: "sanjay",
    batch: "Tamil-Combined",
  },
});

const readAllData = async () => {
  // const response = await axios.get(url);
  const response = await instance.get("/");

  return response.data;
};

const readSingleProduct = async (prodId) => {
  const response = await instance.get(`/${prodId}`);

  return response.data;
};

const editProd = async (id, data) => {
  const response = await instance.put(`/${id}`, data);

  return response.data;
};

const createProd = async (prodData) => {
  const response = await instance.post("/", prodData);

  return response.data;
};

const deleteProduct = async (prodId) => {
  const response = await instance.delete(`/${prodId}`);

  return response.data;
};

export { readAllData, readSingleProduct, editProd, deleteProduct, createProd };
