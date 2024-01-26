import React from "react";
import "../style/video.css";
function YTVideo() {
    const videoUrl = "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  return (
    <>
      <div className="video-container">
      <video controls width="100%" height="auto">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </div>
    </>
  );
}

export default YTVideo;
