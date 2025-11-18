import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username == "") {
      alert("Please enter username");
    } else if (password == "") {
      alert("Please enter password");
    } else if (username == "admin" && password == "admin123") {
      localStorage.setItem("isLoggedIn", "true");
      alert("Login Successful!");
      navigate("/");
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-dark">
      <div className="card shadow-lg" style={{ width: "400px" }}>
        <div className="card-body p-5">
          <h2 className="text-center mb-4">Car Dealership</h2>
          <h5 className="text-center text-muted mb-4">Login</h5>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 py-2">
              Login
            </button>

            <div className="mt-3 text-center">
              <small className="text-muted">
                Demo credentials: admin / admin123
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
