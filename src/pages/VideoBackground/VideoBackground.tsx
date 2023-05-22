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
              "https://res.cloudinary.com/dlf5gecrf/video/upload/v1658606508/benjaminkratzin-website/BenjaminKratzin_DirectorReel_220722_Desktop_858p_4Mbs_v01_g2ufkx.mp4"
            }
            type="video/mp4"
          />
        </video>
      )}
    </div>
  );
}
