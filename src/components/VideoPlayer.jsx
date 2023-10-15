import React, { useState, useRef } from 'react';

const VideoPlayer = ({videoId}) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const handlePause = () => {
        setIsPlaying(false);
    };

    return (
        <div className="video-player">
            <video
                onContextMenu={(e) => e.preventDefault()}
                id="player"
                controls
                controlsList="nodownload"
                ref={videoRef}
                onPlay={handlePlay}
                onPause={handlePause}
            >
                <source src="/img/Jawaan_trailor.mp4" type="video/mp4" />
            </video>
            <div id="video-overlay" className="video-overlay" style={{ display: isPlaying ? 'none' : 'block' }}>
                <div className="video-overlay-body">
                    <div className="title">
                        <h3>{videoId}</h3>
                    </div>
                    <div className="extra">
                        <p>2hr 31min Action 2023 WA 16+</p>
                    </div>
                </div>
            </div>
            <div id="play-btn" className={`play`} style={{ display: isPlaying ? 'none' : 'block' }} onClick={togglePlay}>
                <img src="/img/icons/play.svg" alt="" />
            </div>
        </div>
    );
};

export default VideoPlayer;
