import "./videobackground.css";
export default function App() {

  return (
    <div className="full-screen-container">
        <video className="full-screen-video" playsInline autoPlay muted loop>
          <source
            src=
              "https://frontendfactored.s3.us-west-1.amazonaws.com/video.mp4"
              type="video/mp4"
          />
        </video>
    </div>
  );
}
