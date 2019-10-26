import React from "react";
import Previousupcomingtabs from "./previousupcomingtabs";
import Previousupcomingtabcontent from "./previousupcomingtabcontent";


import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'
import '../../css/jquery-ui.css'

class Previouslatestmatches extends React.Component {
  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="h6 text-uppercase text-black font-weight-bold mb-3">
            Latest Matches
          </h2>
          <div className="site-block-tab">
            <Previousupcomingtabs />
            <Previousupcomingtabcontent />
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Previouslatestmatches;
