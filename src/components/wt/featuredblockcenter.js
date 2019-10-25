import React from "react";

import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'

class Featuredblockcenter extends React.Component {
  render() {
    return (
      <div className="col-md-6 col-lg-4">
        <div
          className="p-3 p-md-5 feature-block-1 mb-5 mb-lg-0 bg"
        >
          <div className="text">
            <h2 className="h5 text-white">White Tigers FC</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              repellat autem illum nostrum sit distinctio!
            </p>
            <p className="mb-0">
              <a
                href="#"
                className="btn btn-primary btn-sm px-4 py-2 rounded-0"
              >
                Read More
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Featuredblockcenter;
