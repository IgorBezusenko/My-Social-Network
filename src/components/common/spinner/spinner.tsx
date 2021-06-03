import React from "react";
import spinner from "../../../assets/image/spinner.gif";

export const Spinner:React.FC = () => {
  return (
    <div>
      <img src={spinner} alt="loading..." style={{ width: "50px" }} />
    </div>
  );
};
