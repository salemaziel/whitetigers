import React from "react";

import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'
//import '../../css/aos.css'
//import '../../css/owl.theme.default.min.css'
//import '../../css/owl.carousel.min.css'

import Contactsection2 from "./Contactsection2";


class Contacthero extends React.Component {
  render() {
    return (
        <div className="bgheromatches">
        
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-3 matchestop">
              <h1 style={{
                textAlign: 'center',
                fontSize: '32px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                paddingTop: '2rem',
              }}
              >
                Contact Us</h1>
              
            </div>
          </div>
          <Contactsection2 />
        </div>
        </div>
    );
  }
}

export default Contacthero;
