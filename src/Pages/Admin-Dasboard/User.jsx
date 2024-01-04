import React from "react";

const User = () => {
  const username = sessionStorage.getItem("userName");
  return (
    <div style={{ marginLeft: "15%" }}>
      <div>WelCome {username}!!</div>
    </div>
  );
};

export default User;
