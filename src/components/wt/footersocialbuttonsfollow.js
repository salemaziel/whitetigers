import React from "react"

import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'
import '../../css/jquery-ui.css'
import Socialbuttons from "./socialbuttons"

class Footersocialbuttonsfollow extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h3 className="footer-heading mb-4">Follow Us</h3>
          <div>
            {/**<a href="#" className="pl-0 pr-3">
              <span className="icon-facebook" />
            </a>
            <a href="#" className="pl-3 pr-3">
              <span className="icon-twitter" />
            </a>
            <a href="#" className="pl-3 pr-3">
              <span className="icon-instagram" />
            </a>
            <a href="#" className="pl-3 pr-3">
              <span className="icon-linkedin" />
            </a>**/}

            <Socialbuttons />

          </div>
        </div>
      </div>
    );
  }
}

export default Footersocialbuttonsfollow
