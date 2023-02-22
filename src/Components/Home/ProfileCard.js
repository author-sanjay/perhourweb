import React from "react";
import image from "../../assets/verified.png";
function ProfileCard() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        boxShadow: "0px 1px 5px grey",
        paddingLeft: "40px",
        paddingRight: "10px",
        paddingTop: "30px",
        paddingBottom: "30px",
        borderRadius: 20,
      }}
    >
      <div style={{ width: "20%" }}>
        <div style={{ justifyContent: "start" }}>
          <img src={image} style={{ alignContent: "center", width: "50%" }} />
        </div>
        <div style={{ justifyContent: "center", marginTop: 10 }}>
          <span
            style={{
              marginLeft: 25,
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            $60/hr
          </span>
        </div>
      </div>
      <div
        className=""
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div className="" style={{ width: "40%", flexDirection: "row" }}>
          <div>
            <img
              src={image}
              style={{ alignContent: "center", width: "10%", float: "left" }}
            />
            <p> Verified</p>
          </div>
          <div className="" style={{ fontSize: 20, fontWeight: "500" }}>
            Name
          </div>
          <div className="" style={{ fontSize: 15, fontWeight: "500" }}>
            Country
          </div>
        </div>
        <div className="" style={{}}>
          <button
            style={{
              backgroundColor: "#E3655B",
              float: "right",
              color: "white",
              padding: "10px",
              borderRadius: "10px",
              marginRight: "5%",
            }}
          >
            Visit Profile
          </button>
        </div>
      </div>

      <div className="">gcsgh</div>
    </div>
  );
}

export default ProfileCard;
