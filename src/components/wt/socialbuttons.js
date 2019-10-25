import React from "react";

import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'

class Socialbuttons extends React.Component {
  render() {
    return (
      <div className="col-6 col-md-3">
        <a href="#" className="text-secondary px-2 pl-0">
          <span className="icon-facebook" />
        </a>
        <a href="#" className="text-secondary px-2">
          <span className="icon-instagram" />
        </a>
        <a href="#" className="text-secondary px-2">
          <span className="icon-twitter" />
        </a>
        <a href="#" className="text-secondary px-2">
          <span className="icon-linkedin" />
        </a>
      </div>
    );
  }
}

export default Socialbuttons;
