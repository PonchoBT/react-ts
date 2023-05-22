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
              "https://player.vimeo.com/external/435674703.sd.mp4?s=01ad1ba21dc72c1d34728e1b77983805b34daad7&profile_id=165&oauth2_token_id=57447761"
            }
            type="video/mp4"
          />
        </video>
      )}
    </div>
  );
}
