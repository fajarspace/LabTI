import React, { Component } from 'react';

class FullScreenMode extends Component {
  constructor(props) {
    super(props);
    this.fullscreenRef = React.createRef();
  }

  handleFullScreen = () => {
    if (this.fullscreenRef.current) {
      if (this.fullscreenRef.current.requestFullscreen) {
        this.fullscreenRef.current.requestFullscreen();
      } else if (this.fullscreenRef.current.webkitRequestFullscreen) { /* Safari */
        this.fullscreenRef.current.webkitRequestFullscreen();
      } else if (this.fullscreenRef.current.msRequestFullscreen) { /* IE11 */
        this.fullscreenRef.current.msRequestFullscreen();
      }
    }
  };

  render() {
    return (
      <div ref={this.fullscreenRef}>
        <button onClick={this.handleFullScreen}>Enter Fullscreen Mode</button>
        <p>Hello World!</p>
      </div>
    );
  }
}

export default FullScreenMode;
