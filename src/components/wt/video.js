import React from "react";

import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'

class Video extends React.Component {
  render() {
    return (
      <div className="block-16">
        <figure>
          <img
            src="images/img_1.jpg"
            alt="Image placeholder"
            className="img-fluid rounded"
          />
          <a
            href="https://vimeo.com/channels/staffpicks/93951774"
            className="play-button popup-vimeo"
          >
            <span className="icon-play" />
          </a>
        </figure>
      </div>
    );
  }
}

export default Video;
