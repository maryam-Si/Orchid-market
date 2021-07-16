import React from "react";
import "../loading/loading.scss";

function Loading() {
  return (
    <div className="container">
      <div className="load-wrapp">
        <div className="load-2">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className="clear"></div>
    </div>
  );
}

export default Loading;
