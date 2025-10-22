import React from "react";
import LoaderImg from "../assets/img/common/winx-lodaing.gif";

const Loader = ({ width = "120px", height = "120px" }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#fff"
      }}
    >
      <img
        src={LoaderImg}
        alt="Loading..."
        style={{ width: width, height: height }}
      />
    </div>
  );
};

export default Loader;
