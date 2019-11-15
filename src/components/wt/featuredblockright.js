import React from "react";


import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'

import '../../css/featureblock3.css'

class Featuredblockright extends React.Component {
  render() {
    return (
      <div className="col-md-6 col-lg-4">
        <div
          className="p-3 p-md-5 feature-block-3 mb-5 mb-lg-0 bg"
        >
          <div className="text">
            
            <p>
              Number 5 for the White Tigers goes for a goal in the Tigers 4 to 1 win over Santos FC on Sunday, October 20.
            </p>
            <p className="mb-0">
              {/**<a
                href="#"
                className="btn btn-primary btn-sm px-4 py-2 rounded-0"
              >
                Read More
              </a>**/}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Featuredblockright;
