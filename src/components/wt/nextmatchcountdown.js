import React from "react";
import Nextmatch from "./nextmatch";


import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'
import '../../css/jquery-ui.css'


class Nextmatchcountdown extends React.Component {
  render() {
    return (
      <div className="site-blocks-vs site-section bg-light">
        <div className="container">
      <div className="border mb-3 rounded d-block d-lg-flex align-items-center p-3 next-match">
        <div className="mr-auto order-md-1 w-60 text-center text-lg-left mb-3 mb-lg-0">
          Next Match
          <div id="date-countdown" />
        </div>
        <Nextmatch />
      </div>
      </div>
      </div>
    );
  }
}

export default Nextmatchcountdown;
