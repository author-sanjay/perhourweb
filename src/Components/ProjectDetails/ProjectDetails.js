import React, { useState } from "react";
import Header from "../Header/Header";
import Coverletter from "./Coverletter";
import Details from "./Details";

function ProjectDetails() {
  const [quotation, setquotation] = useState("0");
  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundColor: "wheat",
      }}
    >
      <Header />
      <div className="main" style={{ display: "flex", flexDirection: "row" }}>
        <Coverletter />
        <Details />
      </div>
    </div>
  );
}

export default ProjectDetails;
