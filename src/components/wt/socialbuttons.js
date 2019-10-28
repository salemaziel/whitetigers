import React from "react";

import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
//import '../../css/bootstrap.min.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

class Socialbuttons extends React.Component {
  render() {
    return (
      <div>
        <a href="https://facebook.com/whitetigersfc/" className="text-secondary px-2 pl-0">
        <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://twitter.com/whitetigersfc1/" className="text-secondary px-2">
        <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/whitetigersfc/" className="text-secondary px-2">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    );
  }
}

export default Socialbuttons;
