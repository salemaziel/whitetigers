import React from "react";


import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
//import '../../css/bootstrap.min.css'
import '../../css/aos.css'
//import '../../css/owl.theme.default.min.css'
//import '../../css/owl.carousel.min.css'


import CGuillen from '../../images/f-CGuillen.jpg'
import JHernandez from '../../images/f-JHernandez.jpg'
import JMazariegos from '../../images/f-JMazariegos.jpg'
import MLopez from '../../images/f-MLopez.jpg'
import VLopez from '../../images/f-VLopez.jpg'


class Teamrowf1 extends React.Component {
  render() {
    return (
     
        <div className="row" style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent:'center',
        textAlign: 'center',
      }}>
        <div className="mb-4 col-md-4">
          <div className="player mb-5">
            
            <img
              src={CGuillen}
              alt=""
              className="getbig img-fluid image rounded-circle"
            />
            <h2>Christopher Guillén</h2>
            <span className="position">Forward</span>
          </div>
        </div>
        <div className="mb-4 col-md-4">
          <div className="player mb-5">
            
            <img
              src={JHernandez}
              alt=""
              className="getbig img-fluid image rounded-circle"
            />
            <h2>Josué Hernandez</h2>
            <span className="position">Forward</span>
          </div>
        </div>
        <div className="mb-4 col-md-4">
          <div className="player mb-5">
            
            <img
              src={JMazariegos}
              alt=""
              className="getbig img-fluid image rounded-circle"
            />
            <h2>Jose Mazariegos</h2>
            <span className="position">Forward</span>
          </div>
        </div>
        <div className="mb-4 col-md-4">
          <div className="player mb-5">
            
            <img
              src={MLopez}
              alt=""
              className="getbig img-fluid image rounded-circle"
            />
            <h2>Michael Lopez</h2>
            <span className="position">Forward</span>
          </div>
        </div>
        <div className="mb-4 col-md-4">
          <div className="player mb-5">
            
            <img
              src={VLopez}
              alt=""
              className="getbig img-fluid image rounded-circle"
            />
            <h2>Victor Lopez</h2>
            <span className="position">Forward</span>
          </div>
        </div>
        </div>

    );
  }
}

export default Teamrowf1;
