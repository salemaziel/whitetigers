import React from "react";

import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'

class Sitemobilemenu extends React.Component {
  render() {
    return (
      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-logo">
            <a href="#">
              <img src="images/whitetigerslogo-139x150.png" alt="Image" />
            </a>
          </div>
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle" />
          </div>
        </div>
        <div className="site-mobile-menu-body" />
      </div>
    );
  }
}

export default Sitemobilemenu;
