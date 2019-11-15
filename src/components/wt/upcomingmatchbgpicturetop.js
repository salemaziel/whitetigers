import React from "react";

import Wtlogo from '../../images/whitetigerslogo-139x150.png'
import Sdifc from '../../images/sd-international-fc.png'
import Sdppa from '../../images/sd-pro-premier-academy-139x150.png'
import Santosfc from '../../images/santosfc.png'
import Rebels from '../../images/rebels-sc.png'
import Pscsd from '../../images/psc-sandiego.png'


import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'


class Upcomingmatchbgpicturetop extends React.Component {
  render() {
    return (
      <div
        className="bg-image overlay-success rounded mb-5"
      >
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-4 mb-4 mb-lg-0">
            <div className="text-center text-lg-left">
              <div className="d-block d-lg-flex align-items-center">
                <div className="image mx-auto mb-3 mb-lg-0 mr-lg-3">
                  <img
                    src={Wtlogo}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="text">
                  <h3 className="h5 mb-0 text-black">White Tigers FC</h3>
                  <span className="text-uppercase small country text-black">
                    San Diego
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4 text-center mb-4 mb-lg-0">
          <h2 className="h2 text-center text-black text-uppercase font-weight-bold mb-3">
        Next Match
      </h2>
            <div className="d-inline-block">
              <p className="mb-2">
                <small className="text-uppercase text-black font-weight-bold">
                  United Premier Soccer League — Upcoming Game
                </small>
              </p>
              <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded">
                <span className="h3"> </span>
              </div>
              <p className="mb-0">
                <small className="text-uppercase text-black font-weight-bold">
                  24 November / 4:00 PM PST
                  <br />
                  Ramona High School
                </small>
              </p>
            </div>
          </div>
          <div className="col-md-12 col-lg-4 text-center text-lg-right">
            <div className>
              <div className="d-block d-lg-flex align-items-center">
                <div className="image mx-auto ml-lg-3 mb-3 mb-lg-0 order-2">
                  <img
                    src={Sdppa}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="text order-1">
                  <h3 className="h5 mb-0 text-black">SD Premier Pros Academy</h3>
                  <span className="text-uppercase small country text-black">
                    San Diego
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Upcomingmatchbgpicturetop;
