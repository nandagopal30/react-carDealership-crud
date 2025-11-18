import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCar, deleteCar, displayCar, editCar } from "./services/allApi";

const Home = () => {
  const [inputBrand, setInputBrand] = useState("");
  const [inputModel, setInputModel] = useState("");
  const [inputYear, setInputYear] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputColor, setInputColor] = useState("");
  const [carDetails, setCarDetails] = useState([]);
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadCarDetails();
  }, []);

  const handleLogout = () => {
      localStorage.removeItem("isLoggedIn");

    alert("Logged out successfully!");
    navigate("/login");
  };

  const loadCarDetails = async () => {
    let apiResponse = await displayCar();
    if (apiResponse.status == 200) {
      setCarDetails(apiResponse.data);
    } else {
      alert("Something went wrong can not access data!");
    }
  };

  const onAddClick = async () => {
    if (inputBrand == "") {
      alert("Please enter brand");
      return;
    }
    if (inputBrand.length < 2) {
      alert("Brand name should be at least 2 characters");
      return;
    }
    let brandOk = true;
    for (let i = 0; i < inputBrand.length; i++) {
      let ch = inputBrand[i].toUpperCase();
      if (!((ch >= "A" && ch <= "Z") || ch == " ")) {
        brandOk = false;
        break;
      }
    }
    if (!brandOk) {
      alert("Brand name should contain only letters");
      return;
    }

    if (inputModel == "") {
      alert("Please enter model");
      return;
    }
    if (inputModel.length < 2) {
      alert("Model name should be at least 2 characters");
      return;
    }

    if (inputYear == "") {
      alert("Please select year");
      return;
    }
    if (inputPrice == "") {
      alert("Please enter price");
      return;
    }
    
    if (inputPrice < 100000) {
      alert("Price should be at least 1,00,000");
      return;
    }
    if (inputPrice > 50000000) {
      alert("Price should not exceed 5,00,00,000");
      return;
    }
    if (inputColor == "") {
      alert("Please select color");
      return;
    }

    let reqBody = {
      brand: inputBrand,
      model: inputModel,
      year: inputYear,
      price: inputPrice,
      color: inputColor,
    };

    let apiResponse = await addCar(reqBody);
    console.log(apiResponse);
    if (apiResponse.status == 201) {
      alert("Successfully added");
      loadCarDetails();
      setInputBrand("");
      setInputModel("");
      setInputYear("");
      setInputPrice("");
      setInputColor("");
    } else {
      alert("Something went wrong!");
    }
  };

  const onDeleteCar = async (id) => {
    let apiResponse = await deleteCar(id);
    if (apiResponse.status == 200) {
      console.log(apiResponse);
      alert("Car deleted!");
      loadCarDetails();
    } else {
      alert("Error Occured!");
    }
  };

  const onEditClickBtn = (carObj) => {
    setInputBrand(carObj.brand);
    setInputModel(carObj.model);
    setInputYear(carObj.year);
    setInputPrice(carObj.price);
    setInputColor(carObj.color);
    setEditId(carObj.id);
  };

  const onEditClick = async () => {
    if (inputBrand == "") {
      alert("Please enter brand");
      return;
    }
    if (inputBrand.length < 2) {
      alert("Brand name should be at least 2 characters");
      return;
    }
    let brandOk = true;
    for (let i = 0; i < inputBrand.length; i++) {
      let ch = inputBrand[i].toUpperCase();
      if (!((ch >= "A" && ch <= "Z") || ch == " ")) {
        brandOk = false;
        break;
      }
    }
    if (!brandOk) {
      alert("Brand name should contain only letters");
      return;
    }

    if (inputModel == "") {
      alert("Please enter model");
      return;
    }
    if (inputModel.length < 2) {
      alert("Model name should be at least 2 characters");
      return;
    }

    if (inputYear == "") {
      alert("Please select year");
      return;
    }
    if (inputPrice == "") {
      alert("Please enter price");
      return;
    }
   
    if (inputPrice < 100000) {
      alert("Price should be at least 1,00,000");
      return;
    }
    if (inputPrice > 50000000) {
      alert("Price should not exceed 5,00,00,000");
      return;
    }
    if (inputColor == "") {
      alert("Please select color");
      return;
    }

    let reqBody = {
      brand: inputBrand,
      model: inputModel,
      year: inputYear,
      price: inputPrice,
      color: inputColor,
    };

    let apiResponse = await editCar(editId, reqBody);
    console.log(apiResponse);
    if (apiResponse.status == 200) {
      alert("Car Edited");
      loadCarDetails();
      setInputBrand("");
      setInputModel("");
      setInputYear("");
      setInputPrice("");
      setInputColor("");
      setEditId(null);
    } else {
      alert("Error occured during edit!");
    }
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center">
      <div className="bg-light w-75 p-5 rounded-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1>Car Dealership Management</h1>
          <button onClick={handleLogout} className="btn btn-danger">
            Logout
          </button>
        </div>

        <div className="m-5 d-flex gap-4 justify-content-center flex-wrap">
          <input
            type="text"
            placeholder="Brand"
            className="form-control w-25 p-2"
            value={inputBrand}
            onChange={(e) => setInputBrand(e.target.value)}
          />
          <input
            type="text"
            placeholder="Model"
            className="form-control w-25 p-2"
            value={inputModel}
            onChange={(e) => setInputModel(e.target.value)}
          />
          <select
            value={inputYear}
            className="w-25 form-select p-2"
            onChange={(e) => setInputYear(e.target.value)}
          >
            <option value="" disabled hidden>
              Select year
            </option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
          </select>
          <input
            type="text"
            placeholder="Price"
            className="form-control w-25 p-2"
            value={inputPrice}
            onChange={(e) => setInputPrice(e.target.value)}
          />
          <select
            value={inputColor}
            className="w-25 form-select p-2"
            onChange={(e) => setInputColor(e.target.value)}
          >
            <option value="" disabled hidden>
              Select color
            </option>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Silver">Silver</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Grey">Grey</option>
          </select>

          {editId ? (
            <button onClick={onEditClick} className="btn btn-info px-4">
              Save
            </button>
          ) : (
            <button onClick={onAddClick} className="btn btn-primary px-4">
              Add Car
            </button>
          )}
        </div>

        <div className="container m-5">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="bg-dark text-light">#</th>
                <th className="bg-dark text-light">Brand</th>
                <th className="bg-dark text-light">Model</th>
                <th className="bg-dark text-light">Year</th>
                <th className="bg-dark text-light">Price</th>
                <th className="bg-dark text-light">Color</th>
                <th className="bg-dark text-light">Action</th>
              </tr>
            </thead>
            <tbody>
              {carDetails.length > 0 ? (
                <>
                  {carDetails.map((car, index) => (
                    <tr key={index}>
                      <th scope="row" className="text-center">
                        {index + 1}
                      </th>
                      <td>{car.brand}</td>
                      <td>{car.model}</td>
                      <td>{car.year}</td>
                      <td>{car.price}</td>
                      <td>{car.color}</td>
                      <td>
                        <button
                          className="btn btn-warning btn-sm mx-1"
                          onClick={() => onEditClickBtn(car)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger btn-sm mx-1"
                          onClick={() => onDeleteCar(car.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                <tr>
                  <td colSpan="7" className="text-center text-danger fw-bold">
                    No Car Added Yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
