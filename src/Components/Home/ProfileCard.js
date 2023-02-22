import { Icon, IconButton } from "@material-ui/core";
import React from "react";
import image from "../../assets/verified.png";
import imag from "../../assets/star.png";
import ima from "../../assets/login.png";
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
              marginLeft: "10%",
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
          //   justifyContent: "space-between",
          alignContent: "space-between",
        }}
      >
        <div
          className=""
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <img
            src={image}
            style={{ alignContent: "center", width: "10%", float: "left" }}
          />
          <p> Verified</p>
          <div style={{ marginLeft: 25 }}>
            <div className="" style={{ fontSize: 20, fontWeight: "500" }}>
              Name
            </div>
            <div className="" style={{ fontSize: 15, fontWeight: "500" }}>
              Country
            </div>
          </div>
        </div>
        <div className="" style={{}}>
          <button
            style={{
              backgroundColor: "#E3655B",
              //   float: "right",
              marginTop: "5%",
              color: "white",
              padding: "10px",
              borderRadius: "10px",
              marginRight: "5%",
              width: "200px",
            }}
          >
            Visit Profile
          </button>
          <div>
            <img
              src={imag}
              style={{
                alignContent: "center",
                width: "12%",
                padding: "5px",
                float: "left",
              }}
            />
            <span style={{ marginTop: "5px" }}>5.00</span>
          </div>
        </div>
      </div>
      <div
        className=""
        style={{ display: "flex", flexDirection: "row", width: "30%" }}
      >
        <img
          src={ima}
          style={{ alignContent: "center", width: "50%", height: "100%" }}
        />

        <div className="" style={{ marginLeft: 30, width: "20%" }}>
          <div className="" style={{ display: "flex", flexDirection: "row" }}>
            <img src={imag} style={{ width: "35%", height: "30%" }} />
            <span style={{ marginLeft: 20, fontWeight: "bold" }}>4.9</span>
          </div>
          <div className="" style={{ flexWrap: "wrap", overflow: "clip" }}>
            ghjhjkghjhjkghjhjkghjhjk
          </div>
          <div className="">By: Sanjay Kumar</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
