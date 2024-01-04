import React, { useState } from "react";
import "./Home.css";
import BannerCard from "./BannerCard";
import Books from "./Books";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/shop");
    sessionStorage.setItem("search", search);
  };
  return (
    <div>
      <div
        className="main d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <div className="home d-flex w-75">
          <div className="first text-start w-75 d-flex flex-column gap-3 ">
            <div className="home-text fs-1 fw-bold">
              Buy and sell your
              <br />
              books{" "}
              <span className="text-primary">
                for the best
                <br />
                prices
              </span>
            </div>
            <div className="dic" style={{ fontSize: "12px" }}>
              Find and read more books you'll love,and keep track of the books
              you want to read.Be
              <br /> part of the world largest community of book lovers on
              Goodreads
            </div>
            <div class="input-group mb-3 w-50 ">
              <input
                type="text"
                class="form-control"
                placeholder="Search books here"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(e) => setSearch(e.target.value)}
              />
              <span
                class="input-group-text bg-primary text-light"
                id="basic-addon2"
                onClick={handleSearch}
              >
                Search
              </span>
            </div>
          </div>
          <div className="right">
            <BannerCard />
          </div>
        </div>
      </div>
      <div>{/* <Books /> */}</div>
    </div>
  );
};

export default Home;
