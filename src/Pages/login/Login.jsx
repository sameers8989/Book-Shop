import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import User from "../Admin-Dasboard/User";

const Login = () => {
  const [formData, setFormData] = useState({
    user_Name: "",
    passWord: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    checkTokenExpiration();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:100/user/login",
        formData
      );
      console.log(response);
      const token = response.data.token;
      console.log(token);
      localStorage.setItem("token", token);
      console.log("Login successful!");
      navigate("/home");
      if (response) {
        const authorId = response.data.decodedPayload.userId;
        const userName = response.data.decodedPayload.user_Name;
        console.log(authorId);
        sessionStorage.setItem("authorId", authorId);
        sessionStorage.setItem("userName", userName);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const checkTokenExpiration = () => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const isExpiredToken = decodedToken.exp < Date.now() / 1000;
        if (isExpiredToken) {
          handleLogout();
        }
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  };

  const handleLogout = () => {
    console.log("User logged out");
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: "400px" }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4">
            Login to Your Bookshop Account
          </h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="user_Name" className="form-label">
                User Name:
              </label>
              <input
                type="text"
                id="user_Name"
                name="user_Name"
                value={formData.user_Name}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="passWord" className="form-label">
                Password:
              </label>
              <input
                type="password"
                id="passWord"
                name="passWord"
                value={formData.passWord}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-success w-100">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
