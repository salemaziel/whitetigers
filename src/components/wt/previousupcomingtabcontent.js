import React from "react";
import Previousmatchesall from "./previousmatchesall";
import Upcomingmatchesall from "./upcomingmatchesall";


import '../../css/style.css'
import '../../css/bootstrap-grid.css'
//import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'
import '../../css/jquery-ui.css'



class Previousupcomingtabcontent extends React.Component {
  render() {
    return (
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <Previousmatchesall />
        </div>
        {}
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div className="row align-items-center">
            <Upcomingmatchesall />
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
                <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
                  <div className="text-center text-lg-left">
                    <div className="d-block d-lg-flex align-items-center">
                      <div className="image image-small text-center mb-3 mb-lg-0 mr-lg-3">
                        <img
                          src="images/img_1_sq.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="text">
                        <h3 className="h5 mb-0 text-black">White Tigers</h3>
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
                      Sept 15 / 4:00 PM
                    </h6>
                    <br />
                    <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded">
                      <span className="h5">3:2</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 text-center text-lg-right">
                  <div className>
                    <div className="d-block d-lg-flex align-items-center">
                      <div className="image image-small ml-lg-3 mb-3 mb-lg-0 order-2">
                        <img
                          src="images/img_4_sq.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="text order-1 w-100">
                        <h3 className="h5 mb-0 text-black">America</h3>
                        <span className="text-uppercase small country">
                          Mexico
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
                <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
                  <div className="text-center text-lg-left">
                    <div className="d-block d-lg-flex align-items-center">
                      <div className="image image-small text-center mb-3 mb-lg-0 mr-lg-3">
                        <img
                          src="images/img_1_sq.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="text">
                        <h3 className="h5 mb-0 text-black">White Tigers</h3>
                        <span className="text-uppercase small country">
                          San Diego
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">
                  <div className="d-inline-block">
                    <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded">
                      <span className="h5">3:2</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 text-center text-lg-right">
                  <div className>
                    <div className="d-block d-lg-flex align-items-center">
                      <div className="image image-small ml-lg-3 mb-3 mb-lg-0 order-2">
                        <img
                          src="images/img_4_sq.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="text order-1 w-100">
                        <h3 className="h5 mb-0 text-black">Cruz Azul</h3>
                        <span className="text-uppercase small country">
                          Mexico
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
                <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
                  <div className="text-center text-lg-left">
                    <div className="d-block d-lg-flex align-items-center">
                      <div className="image image-small text-center mb-3 mb-lg-0 mr-lg-3">
                        <img
                          src="images/img_1_sq.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="text">
                        <h3 className="h5 mb-0 text-black">White Tigers</h3>
                        <span className="text-uppercase small country">
                          San Diego
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">
                  <div className="d-inline-block">
                    <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded">
                      <span className="h5">3:2</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 text-center text-lg-right">
                  <div className>
                    <div className="d-block d-lg-flex align-items-center">
                      <div className="image image-small ml-lg-3 mb-3 mb-lg-0 order-2">
                        <img
                          src="images/img_4_sq.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="text order-1 w-100">
                        <h3 className="h5 mb-0 text-black">Barcelona</h3>
                        <span className="text-uppercase small country">
                          Spain
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Previousupcomingtabcontent;
