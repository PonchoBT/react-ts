import React from 'react';
import ReactPlayer from 'react-player';

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
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
    </div>
  );
};

export default VideoBackground;
