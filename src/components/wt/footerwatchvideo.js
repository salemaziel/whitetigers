import React from "react";
import Video from "./video";

import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'
import '../../css/jquery-ui.css'

class Footerwatchvideo extends React.Component {
  render() {
    return (
      <div className="mb-5">
        <h3 className="footer-heading mb-4">Watch Video</h3>
        <Video />
      </div>
    );
  }
}

export default Footerwatchvideo;
