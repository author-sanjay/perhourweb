import React, { useState } from "react";

function Header() {
  const [login, setlogin] = useState(false);
  return (
    <div
      style={{
        margin: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div
        className="ml-20"
        style={{
          cursor: "pointer",
          color: "#E3655B",
          fontWeight: "500",
          wordSpacing: 10,
        }}
      >
        PerHour
      </div>
      <div
        style={{
          //   cursor: "pointer",
          marginRight: 20,
          display: "flex",
          flexDirection: "row",
          width: "50%",
          justifyContent: "space-between",
        }}
      >
        <div className="ml-4 cursor-pointer">Hire</div>
        <div className="ml-4 cursor-pointer">Projects</div>
        <div className="ml-4 cursor-pointer">Payments</div>
        <div className="ml-4 cursor-pointer">Reviews</div>
        {login ? (
          <div className="mr-10 ml-4 cursor-pointer">Profile</div>
        ) : (
          <div className="flex flex-row ">
            <div className="cursor-pointer mr-5">Login</div>
            <div
              className="pl-2 pr-2 "
              style={{ backgroundColor: "#E3655B", borderRadius: 4 }}
            >
              <span style={{ color: "white" }}>Sign Up</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
