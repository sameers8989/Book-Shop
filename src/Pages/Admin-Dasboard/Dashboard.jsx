import React, { useState } from "react";
import { RiUploadCloud2Line } from "react-icons/ri";
import { MdManageSearch } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import Upload from "./Upload";
import Manage from "./Manage";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Dashboard = () => {
  const username = sessionStorage.getItem("userName");

  return (
    <div className="d-flex">
      <div
        className="d-flex flex-column gap-1  bg-light sidebar position-fixed"
        style={{ width: "15%", height: "100vh" }}
      >
        <div className="mb-4 text-center p-3 pb-0">
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="rounded-circle"
          />
          <div className="mt-2">{username}</div>
        </div>
        <Link to="upload" className="text-decoration-none text-dark">
          <div className="sidebar-item ">
            <RiUploadCloud2Line />
            <span className="ms-3">Upload Books</span>
          </div>
        </Link>
        <Link to="manage" className="text-decoration-none text-dark">
          <div className="sidebar-item">
            <MdManageSearch />
            <span className="ms-3">Manage Books</span>
          </div>
        </Link>
        <Link to="user" className="text-decoration-none text-dark">
          <div className="sidebar-item">
            <FaRegUser />
            <span className="ms-3">Users</span>
          </div>
        </Link>
        <div className="sidebar-item">
          <MdProductionQuantityLimits />
          <span className="ms-3">Products</span>
        </div>
        <Link to="logout" className="text-decoration-none text-dark">
          <div className="sidebar-item">
            <IoIosLogOut />
            <span className="ms-3">Log Out</span>
          </div>
        </Link>
      </div>
      {/* <div className="components" style={{ marginLeft: "12%", width: "100%" }}>
        {upload && <Upload />}
        {manage && <Manage />}
      </div> */}
    </div>
  );
};

export default Dashboard;
