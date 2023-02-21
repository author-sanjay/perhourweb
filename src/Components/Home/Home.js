import React from "react";
import Header from "../Header/Header";

function Home() {
  return (
    <div
      className="flex flex-col"
      style={{ backgroundColor: "white", width: "100%", height: "100vh" }}
    >
      <div className="" style={{ boxShadow: "0px 1px 5px black" }}>
        <Header />
      </div>
    </div>
  );
}

export default Home;
