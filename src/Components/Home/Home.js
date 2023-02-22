import React from "react";
import Header from "../Header/Header";
import ProfileCard from "./ProfileCard";
import SearchBar from "./SearchBar";

function Home() {
  return (
    <div
      className="flex flex-col"
      style={{ backgroundColor: "white", width: "100%", height: "100vh" }}
    >
      <div className="" style={{ boxShadow: "0px 1px 5px black" }}>
        <Header />
      </div>
      <div className="" style={{ backgroundColor: "#fcfbfc" }}>
        <SearchBar />
      </div>
      <div className="" style={{ margin: 20, marginLeft: 50 }}>
        <ProfileCard />
      </div>
    </div>
  );
}

export default Home;
