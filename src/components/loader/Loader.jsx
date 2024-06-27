// LoadingSpinner.js
import React from "react";
import "./style.css"
import {HashLoader} from "react-spinners";
const LoadingSpinner = () => {

  return <HashLoader color="#36d7b7"  speedMultiplier={0.5}  />
};


const FullPageLoadingSpinner = () => {

  return (
    <div className="full-page-loader">
          <div className="spinner-container">
            <LoadingSpinner />
          </div>
        </div>
  );
};

export default FullPageLoadingSpinner;

