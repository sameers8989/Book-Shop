import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("User logged out");
    localStorage.removeItem("token");
    sessionStorage.removeItem("authorId");
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: "400px" }}>
        <div className="card-body">
          {/* ... (other form elements) */}
          <div className="mb-3">
            <button
              variant="danger"
              onClick={handleLogout}
              className=" btn btn-primary w-100"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
