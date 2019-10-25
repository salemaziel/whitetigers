import React from "react";
import Footerquickmenu from "./footerquickmenu";
import Footersocialbuttonsfollow from "./footersocialbuttonsfollow";
import Footervideosubscribe from "./footervideosubscribe";

import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'

class Foot extends React.Component {
  render() {
    return (
      <footer className="site-footer border-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="mb-5">
                <h3 className="footer-heading mb-4">About WhiteTigersFC</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Saepe pariatur reprehenderit vero atque, consequatur id
                  ratione, et non dignissimos culpa? Ut veritatis, quos illum
                  totam quis blanditiis, minima minus odio!
                </p>
              </div>
              <div className="mb-5">
                <h3 className="footer-heading mb-4">Recent Blog</h3>
                <div className="block-25">
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <a href="#" className="d-flex">
                        <figure className="image mr-4">
                          <img
                            src="images/img_1.jpg"
                            alt
                            className="img-fluid"
                          />
                        </figure>
                        <div className="text">
                          <h3 className="heading font-weight-light">
                            Lorem ipsum dolor sit amet consectetur elit
                          </h3>
                        </div>
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="#" className="d-flex">
                        <figure className="image mr-4">
                          <img
                            src="images/img_1.jpg"
                            alt
                            className="img-fluid"
                          />
                        </figure>
                        <div className="text">
                          <h3 className="heading font-weight-light">
                            Lorem ipsum dolor sit amet consectetur elit
                          </h3>
                        </div>
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="#" className="d-flex">
                        <figure className="image mr-4">
                          <img
                            src="images/img_1.jpg"
                            alt
                            className="img-fluid"
                          />
                        </figure>
                        <div className="text">
                          <h3 className="heading font-weight-light">
                            Lorem ipsum dolor sit amet consectetur elit
                          </h3>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <Footerquickmenu />
              <Footersocialbuttonsfollow />
            </div>
            <Footervideosubscribe />
          </div>
        </div>
      </footer>
    );
  }
}

export default Foot;
