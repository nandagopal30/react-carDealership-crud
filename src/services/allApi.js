import axiosConfig from "./axiosConfig";

export const addCar = async (reqBody) => {
  return await axiosConfig(
    "post",
    "https://car-dealership-backend-aqx9.onrender.com/carDetails",
    reqBody
  );
};

export const displayCar = async () => {
  return await axiosConfig(
    "get",
    "https://car-dealership-backend-aqx9.onrender.com/carDetails",
    ""
  );
};

export const deleteCar = async (id) => {
  return await axiosConfig(
    "delete",
    `https://car-dealership-backend-aqx9.onrender.com/carDetails/${id}`,
    {}
  );
};

export const editCar = async (id, reqBody) => {
  return await axiosConfig(
    "put",
    `https://car-dealership-backend-aqx9.onrender.com/carDetails/${id}`,
    reqBody
  );
};
