import React from "react";

function Details() {
  return (
    <div
      className="right"
      style={{
        // boxShadow: "",
        minHeight: "89vh",
        width: "40%",
        // borderWidth: 1,
        borderColor: "black",
        // borderLeft: 2,
        // borderLeftColor: "black",
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          className=""
          style={{
            margin: 20,
            fontSize: 25,
            fontWeight: "lighter",
            flexWrap: "wrap",
          }}
        >
          Project Title
        </div>
        <div
          className=""
          style={{
            margin: 20,
            fontSize: 25,
            fontWeight: "lighter",
            flexWrap: "wrap",
          }}
        >
          Price
        </div>
      </div>
      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div className="">
          <div className="" style={{ marginLeft: 20, fontSize: 12 }}>
            Total Proposals: 56
          </div>
          {/* <hr color="black" /> */}
          <div className="" style={{ marginLeft: 20, fontSize: 12 }}>
            Duration :15 Days
          </div>
        </div>
        <div
          className=""
          style={{
            marginLeft: 20,
            fontSize: 15,
            flexWrap: "wrap",
            fontWeight: "normal",
            paddingRight: "20",
          }}
        >
          Intermediate
        </div>
      </div>
      <div className="" style={{ maxWidth: "100%", flexWrap: "wrap" }}>
        <div
          className=""
          style={{ paddingLeft: 20, paddingTop: 20, fontSize: 18 }}
        >
          Description
        </div>
        <div
          className=""
          style={{
            flexWrap: "wrap",
            fontSize: 12,
            wordWrap: "break-word",
            paddingLeft: 20,
            paddingTop: 10,
          }}
        >
          jhgjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          jhgjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          jhgjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          jhgjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          jhgjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          jhgjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
        </div>
      </div>
    </div>
  );
}

export default Details;
