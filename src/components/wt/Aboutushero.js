import React from "react";
import Aboutusherotext from "./Aboutusherotext";


import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'
import '../../css/aos.css'
//import '../../css/owl.theme.default.min.css'
//import '../../css/owl.carousel.min.css'




class Aboutushero extends React.Component {
  render() {
    return (
      <div className="bghero">
        <div
          className="site-blocks-cover overlay"
        >
          <div className="container">
            <div className="row align-items-center justify-content-start">
              <div
                className="col-md-6 text-center text-md-left"
              >
                
                
                
                {}
                <Aboutusherotext />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Aboutushero;
