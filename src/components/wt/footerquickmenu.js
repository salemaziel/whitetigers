import React from "react";

import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'
import '../../css/jquery-ui.css'

class Footerquickmenu extends React.Component {
  render() {
    return (
      <div className="row mb-5">
        <div className="col-md-12">
          <h3 className="footer-heading mb-4">Quick Menu</h3>
        </div>
        <div className="col-md-6 col-lg-6">
          <ul className="list-unstyled">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/matches">Matches</a>
            </li>
            <li>
              <a href="/team">Team</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-6">
          <ul className="list-unstyled">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Membership</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footerquickmenu;
