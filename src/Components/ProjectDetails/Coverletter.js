import React from "react";

function Coverletter() {
  return (
    <div
      className="left"
      style={{
        width: "60%",
        minHeight: "89vh",
        borderWidth: 1,
        borderColor: "black",
        borderLeft: 0,

        borderTop: 0,
        borderBottom: 0,
        paddingLeft: "5%",
        paddingTop: "2%",
      }}
    >
      <div className="" style={{ fontSize: 20, fontWeight: "lighter" }}>
        Place Bid
      </div>
      <div className="" style={{ paddingTop: 15 }}>
        <div className="">Quotation</div>
        <div
          className=""
          style={{ paddingTop: 10, display: "flex", flexDirection: "row" }}
        >
          <input
            style={{
              paddingLeft: 10,
              width: "40%",
              backgroundColor: "transparent",
              borderWidth: 1,
              borderColor: "black",
            }}
          />
          <div className="" style={{ paddingLeft: 20 }}>
            $ per Hour
          </div>
        </div>
      </div>

      <div className="" style={{ paddingTop: 15 }}>
        <div className="">Cover Letter</div>
        <div
          className=""
          style={{ paddingTop: 10, display: "flex", flexDirection: "row" }}
        >
          <textarea
            style={{
              paddingTop: 10,
              paddingLeft: 10,
              width: "90%",
              height: "30vh",
              backgroundColor: "transparent",
              borderWidth: 1,
              borderColor: "black",
            }}
          />
        </div>
      </div>

      <div className="" style={{ paddingTop: 15 }}>
        <div className="">Time Required</div>
        <div
          className=""
          style={{ paddingTop: 10, display: "flex", flexDirection: "row" }}
        >
          <input
            type={"number"}
            style={{
              width: "40%",
              paddingLeft: 10,
              backgroundColor: "transparent",
              borderWidth: 1,
              borderColor: "black",
            }}
          />
          <div className="" style={{ paddingLeft: 20 }}>
            Days
          </div>
        </div>
      </div>

      <div
        className=""
        style={{
          backgroundColor: "#E3655B",
          width: "90%",
          marginTop: 20,
          paddingTop: 10,
          paddingBottom: 10,
          borderRadius: 15,
        }}
      >
        <span
          style={{
            alignSelf: "center",
            paddingLeft: "45%",
            color: "white",
            fontSize: 18,
          }}
        >
          Submit
        </span>
      </div>
    </div>
  );
}

export default Coverletter;
