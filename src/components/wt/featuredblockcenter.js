import React from "react";

import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'
import '../../css/jquery-ui.css'


class Featuredblockcenter extends React.Component {
  render() {
    return (
      <div className="col-md-6 col-lg-4">
        <div
          className="p-3 p-md-5 feature-block-1 mb-5 mb-lg-0 bg"
        >
          <div className="text">
            
            <p>
              The White Tigers absolutely destroyed PSC San Diego 10 to 1 at Monte Vista High School on Sunday, October 13
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

export default Featuredblockcenter;
