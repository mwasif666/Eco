"use client";
import React from "react";

const VideOne = () => {
  return (
    <div className="tp-hero-bottom-img-wrap">
      <div className="tp-hero-bottom-img">
        <video loop={true} muted={true} autoPlay={true} playsInline={true}>
          <source
            src="https://2050today.org/wp-content/uploads/2020/07/Video-Placeholder.mp4?_=6"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default VideOne;
