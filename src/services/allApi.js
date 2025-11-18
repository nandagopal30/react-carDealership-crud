import axiosConfig from "./axiosConfig";

export const addCar = async (reqBody) => {
  return await axiosConfig("post", "http://localhost:3000/carDetails", reqBody);
};

export const displayCar = async () => {
  return await axiosConfig("get", "http://localhost:3000/carDetails", "");
};

export const deleteCar = async (id) => {
  return await axiosConfig(
    "delete",
    `http://localhost:3000/carDetails/${id}`,
    {}
  );
};

export const editCar = async (id, reqBody) => {
  return await axiosConfig(
    "put",
    `http://localhost:3000/carDetails/${id}`,
    reqBody
  );
};
