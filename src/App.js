import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Register from "./Pages/login/Register";
import Login from "./Pages/login/Login";
import Layout from "./Layout";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Upload from "./Pages/Admin-Dasboard/Upload";
import Manage from "./Pages/Admin-Dasboard/Manage";
import Dashlayout from "./Pages/Admin-Dasboard/Dashlayout";
import EditBooks from "./Pages/Admin-Dasboard/EditBooks";
import Logout from "./Pages/Admin-Dasboard/Logout";
import BookDetails from "./Pages/Shop/BookDetails";
import User from "./Pages/Admin-Dasboard/User";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {!isLoggedIn && <Route path="/" element={<Navigate to="/login" />} />}

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/layout" element={<Dashlayout />}>
            <Route path="upload" element={<Upload />} />
            <Route path="manage" element={<Manage />} />
            <Route path="edit/:bookId" element={<EditBooks />} />
            <Route path="user" element={<User />} />
            <Route path="logout" element={<Logout />} />
          </Route>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="moredetails/:bookId" element={<BookDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
