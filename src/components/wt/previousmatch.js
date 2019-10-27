import React from "react";


import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'
//import '../../scss/style.scss'
import '../../css/jquery-ui.css'

import Wtlogo from '../../images/whitetigerslogo-139x150.png'


class Previousmatch extends React.Component {
  render() {
    return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="h2 text-uppercase text-center text-black font-weight-bold mb-3">
            Previous Match
          </h2>
          <div className="site-block-tab">
          
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-12">

        <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
          <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
            <div className="text-center text-lg-left">
              <div className="d-block d-lg-flex align-items-center">
                <div className="image image-small text-center mb-3 mb-lg-0 mr-lg-3">
                  <img
                    src={Wtlogo}
                    alt="Image"
                    className="img-fluid"
                  />
                </div>
                <div className="text">
                  <h3 className="h5 mb-0 text-black">White Tigers FC</h3>
                  <span className="text-uppercase small country">
                    San Diego
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">
            <div className="d-inline-block">
              <h6 className="h6 mb-0 text-black text-center text-uppercase">
                Oct 20 / 4:00 PM
                <br />
                Monte Vista High School
              </h6>
              <br />
              <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded">
                <span className="h5">0:0</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center text-lg-right">
            <div className>
              <div className="d-block d-lg-flex align-items-center">
                <div className="image image-small ml-lg-3 mb-3 mb-lg-0 order-2">
                  <img
                    src="images/santosfc.png"
                    alt="Image"
                    className="img-fluid"
                  />
                </div>
                <div className="text order-1 w-100">
                  <h3 className="h5 mb-0 text-black">Santos FC</h3>
                  <span className="text-uppercase small country">
                    San Diego
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Previousmatch