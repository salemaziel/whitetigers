import React from "react";


import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'
import '../../css/aos.css'
//import '../../css/owl.theme.default.min.css'
//import '../../css/owl.carousel.min.css'
import '../../css/jquery-ui.css'

import JGonzalez from '../../images/d-JGonzalez.jpg'
import JMondragon from '../../images/d-JMondragon.jpg'
import KBarba from '../../images/d-KBarba.jpg'
import KCortez from '../../images/d-KCortez.jpg'
import MRomero from '../../images/d-MRomero.jpg'

class Teamrowd2 extends React.Component {
  render() {
    return (
      <div className="row" style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
      }}>
        <div className="mb-4 col-md-4">
          <div className="player mb-5">
            
            <img
              src={JGonzalez}
              alt=""
              className="img-fluid image rounded-circle"
            />
            <h2>Jose González</h2>
            <span className="position">Defender</span>
          </div>
        </div>
        <div className="mb-4 col-md-4">
          <div className="player mb-5">
            
            <img
              src={JMondragon}
              alt=""
              className="img-fluid image rounded-circle"
            />
            <h2>Jose Mondragón</h2>
            <span className="position">Defender</span>
          </div>
        </div>
        <div className="mb-4 col-md-4">
          <div className="player mb-5">
            
            <img
              src={KBarba}
              alt=""
              className="img-fluid image rounded-circle"
            />
            <h2>Kevin Barba</h2>
            <span className="position">Defender</span>
          </div>
        </div>
        <div className="mb-4 col-md-4">
          <div className="player mb-5">
            
            <img
              src={KCortez}
              alt=""
              className="img-fluid image rounded-circle"
            />
            <h2>Kevin Cortez</h2>
            <span className="position">Defender</span>
          </div>
        </div>
        <div className="mb-4 col-md-4">
          <div className="player mb-5">
            
            <img
              src={MRomero}
              alt=""
              className="img-fluid image rounded-circle"
            />
            <h2>Marcos Romero</h2>
            <span className="position">Defender</span>
          </div>
        </div>

      </div>

    );
  }
}

export default Teamrowd2;
