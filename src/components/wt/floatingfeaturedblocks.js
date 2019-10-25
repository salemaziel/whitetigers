import React from "react";
import Featuredblockleft from "./featuredblockleft";
import Featuredblockcenter from "./featuredblockcenter";
import Featuredblockright from "./featuredblockright";

import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'

class Floatingfeaturedblocks extends React.Component {
  render() {
    return (
      <div
        className="site-section pt-0 feature-blocks-1"
      >
        <div className="container">
          <div className="row">
            <Featuredblockleft />
            <Featuredblockcenter />
            <Featuredblockright />
          </div>
        </div>
      </div>
    );
  }
}

export default Floatingfeaturedblocks;
