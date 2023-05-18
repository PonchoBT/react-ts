import React from "react";
import ReactPlayer from "react-player";
import "./videobackground.css";


const VideoBackground: React.FC = () => {
  return (
    <div className="video-container">
      <ReactPlayer
        url="https://frontendfactored.s3.us-west-1.amazonaws.com/video.mp4" // Reemplaza "ruta-del-video.mp4" con la ruta real de tu video
        playing
        loop
        muted
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <div className="content">
        <h1>Bienvenido a mi sitio web</h1>
        <p>Este es un ejemplo de fondo de video en React con TypeScript.</p>
      </div>
    </div>
  );
};

export default VideoBackground;
