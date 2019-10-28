import React from "react";
import Aboutmatchhighlightsrow from "./Aboutmatchhighlightsrow";



import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
//import '../../css/bootstrap.min.css'
import '../../css/aos.css'
//import '../../css/owl.theme.default.min.css'
//import '../../css/owl.carousel.min.css'
import '../../css/jquery-ui.css'


class Aboutmatchhighlights extends React.Component {
  render() {
    return (
      <div className="site-section feature-blocks-1 no-margin-top">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12 text-center">
              <h2 className="text-black">Match Highlights</h2>
            </div>
          </div>
          <Aboutmatchhighlightsrow></Aboutmatchhighlightsrow>
        </div>
      </div>
    );
  }
}

export default Aboutmatchhighlights;
