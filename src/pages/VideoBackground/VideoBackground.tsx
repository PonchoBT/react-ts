import "./videobackground.css";

import { useState } from "react";

import Vimeo from "@u-wave/react-vimeo";

export default function App() {
  const [isVimeoSource, setIsVimeoSource] = useState(false);

  return (
    <div className="full-screen-container">
      <div className="label-text">
        {isVimeoSource ? "Vimeo iFrame" : "HTML Video Element"}
      </div>
      <label className="switch">
        <input
          type="checkbox"
          onClick={() => setIsVimeoSource((prev) => !prev)}
        />
        <span className="slider round" />
      </label>

      {isVimeoSource ? (
        <Vimeo
          className="react-vimeo-player"
          video={"736830436"}
          // width={"100%"}
          //height={"100%"}
          autoplay={true}
          muted={true}
          loop={true}
          responsive={true}
          // controls={false}
          background={true}
        />
      ) : (
        <video className="full-screen-video" playsInline autoPlay muted loop>
          <source
            src={
              "https://frontendfactored.s3.us-west-1.amazonaws.com/GTP+ESPAN%CC%83OL.m4v"
            }
            type="video/mp4"
          />
        </video>
      )}
    </div>
  );
}
