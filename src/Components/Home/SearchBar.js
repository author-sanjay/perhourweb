import React from "react";

function SearchBar() {
  return (
    <div
      style={{
        marginLeft: "8%",
        marginTop: "4%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div className="" style={{ width: "50%" }}>
        <div className="">What are You Looking For?</div>
        <div className="clicks">
          <div
            className="flex flex-row"
            style={{ justifyContent: "space-between" }}
          >
            <div className="">UI/UX Development </div>
            <div className="">Software Development </div>
          </div>
          <div
            className="flex flex-row"
            style={{ justifyContent: "space-between" }}
          >
            <div className="">Content Writer </div>
            <div className="">Film Maker </div>
          </div>
          <div
            className="flex flex-row"
            style={{ justifyContent: "space-between" }}
          >
            <div className="">Video Editor </div>
            <div className="">Game Developer </div>
          </div>
        </div>
      </div>
      <div className="" style={{ marginRight: "20%" }}>
        <div className="">Search By Skills</div>
      </div>
    </div>
  );
}

export default SearchBar;
