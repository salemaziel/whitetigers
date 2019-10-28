import React from "react";
import Aboutusherotext from "./Aboutusherotext";


import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'
import '../../css/aos.css'
//import '../../css/owl.theme.default.min.css'
//import '../../css/owl.carousel.min.css'
import '../../css/jquery-ui.css'

class Aboutushero extends React.Component {
  render() {
    return (
      <div
        className="site-blocks-cover overlay"
        style={{
          backgroundImage: "url(images/hero_bg_3.jpg)"
        }}
        data-aos="fade"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row align-items-center justify-content-start">
            <Aboutusherotext></Aboutusherotext>
          </div>
        </div>
      </div>
    );
  }
}

export default Aboutushero;
