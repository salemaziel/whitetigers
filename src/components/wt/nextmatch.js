import React from "react";

import Wtlogo from '../../images/whitetigerslogo-139x150.png'
import Sdifc from '../../images/sd-international-fc.png'

import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'
import '../../css/jquery-ui.css'


class Nextmatch extends React.Component {
  render() {
    return (
      <div className="ml-auto pr-4 order-md-2">
        <div className="h5 text-black text-uppercase text-center text-lg-left">
          <div className="d-block d-md-inline-block mb-3 mb-lg-0">
            <img
              src={Wtlogo}
              alt="Image"
              className="mr-3 image"
            />
            <span className="d-block d-md-inline-block ml-0 ml-md-3 ml-lg-0">
              White Tigers FC
            </span>
          </div>
          <span className="text-muted mx-3 text-normal mb-3 mb-lg-0 d-block d-md-inline ">
            vs
          </span>
          <div className="d-block d-md-inline-block">
            <img
              src={Sdifc}
              alt="Image"
              className="mr-3 image"
            />
            <span className="d-block d-md-inline-block ml-0 ml-md-3 ml-lg-0">
              SD Internacional FC
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Nextmatch;
