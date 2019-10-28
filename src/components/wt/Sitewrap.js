import React from "react";

import '../../css/style.css'
//import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
//import '../../css/bootstrap.min.css'
//import '../../css/aos.css'
//import '../css/owl.theme.default.min.css'
//import '../css/owl.carousel.min.css'
import Sitemobilemenu from "./sitemobilemenu";

class Sitewrap extends React.Component {
  render() {
    return (
      <div className="site-wrap">
        <Sitemobilemenu />
              
      </div>
    );
  }
}

export default Sitewrap;
