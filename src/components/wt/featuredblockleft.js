import React from "react";


import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'
import '../../css/jquery-ui.css'

import '../../css/featureblock2.css'

class Featuredblockleft extends React.Component {
  render() {
    return (
      <div className="col-md-6 col-lg-4">
        <div
          className="p-3 p-md-5 feature-block-2 mb-5 mb-lg-0 bg"
        >
          <div className="text">
            
            <p>
              The White Tigers walk onto their homefield in Ramona to begin their fight for the Lamar Hunt U.S. Open Cup!
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

export default Featuredblockleft;
