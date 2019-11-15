import React from "react";
import Aboutmatchhighlightsleftblock from "./Aboutmatchhighlightsleftblock";
import Aboutmatchhighlightscenterblock from "./Aboutmatchhighlightscenterblock";
import Aboutmatchhighlightsrightblock from "./Aboutmatchhighlightsrightblock";


import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
//import '../../css/bootstrap.min.css'
import '../../css/aos.css'
//import '../../css/owl.theme.default.min.css'
//import '../../css/owl.carousel.min.css'


class Aboutmatchhighlightsrow extends React.Component {
  render() {
    return (
      <div className="row">
        <Aboutmatchhighlightsleftblock></Aboutmatchhighlightsleftblock>
        <Aboutmatchhighlightscenterblock></Aboutmatchhighlightscenterblock>
        <Aboutmatchhighlightsrightblock></Aboutmatchhighlightsrightblock>
      </div>
    );
  }
}

export default Aboutmatchhighlightsrow;
