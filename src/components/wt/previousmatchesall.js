import React from "react";


import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'
//import '../../scss/style.scss'
import '../../css/jquery-ui.css'

class Previousmatchesall extends React.Component {
  render() {
    return (
      <div className="row align-items-center">
        <div className="col-md-12">
          <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
            <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
              <div className="text-center text-lg-left">
                <div className="d-block d-lg-flex align-items-center">
                  <div className="image image-small text-center mb-3 mb-lg-0 mr-lg-3">
                    <img
                      src="images/sd-pro-premier-academy.png"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="text">
                    <h3 className="h5 mb-0 text-black">
                      SD Premier Pros Academy
                    </h3>
                    <span className="text-uppercase small country">
                      San Diego
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">
              <div className="d-inline-block">
                <div className="text">
                  <h6 className="h6 mb-0 text-black text-center text-uppercase">
                    Sept 8
                  </h6>
                  <h5 className="h3 mb-0 text-black text-center text-uppercase">
                    Final Score
                  </h5>
                  <br />
                </div>
                <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded">
                  <span className="h5">0:4</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 text-center text-lg-right">
              <div className>
                <div className="d-block d-lg-flex align-items-center">
                  <div className="image image-small ml-lg-3 mb-3 mb-lg-0 order-2">
                    <img
                      src="images/whitetigerslogo-139x150.png"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="text order-1 w-100">
                    <h3 className="h5 mb-0 text-black">White Tigers FC</h3>
                    <span className="text-uppercase small country">
                      San Diego
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {}
          {}
          {}
          {}
          {}
        </div>
      </div>
    );
  }
}

export default Previousmatchesall;
