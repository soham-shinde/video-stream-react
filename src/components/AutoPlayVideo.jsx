import React, { Component } from 'react';

class AutoPlayVideo extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.state = {
      isPlaying: false,
    };
  }

  componentDidMount() {
    // Start playing the video when the component mounts
    this.playVideo();
  }

  playVideo = () => {
    if (this.videoRef.current) {
      this.videoRef.current.play();
      this.setState({ isPlaying: true });
    }
  };

  render() {
    return (
      <div>
        <video
          ref={this.videoRef}
          controls={false} // Disable controls
          autoPlay
          muted
          onContextMenu={(e) => e.preventDefault()} // Disable right-click context menu
          onEnded={() => this.setState({ isPlaying: false })}
        >
          <source src="/img/Jawaan_trailor.mp4"  type="video/mp4" />
          Your browser does not support the video tag.
        </video>
       
      </div>
    );
  }
}

export default AutoPlayVideo;
