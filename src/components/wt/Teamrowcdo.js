import React from "react";


import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
//import '../../css/bootstrap.min.css'
import '../../css/aos.css'
//import '../../css/owl.theme.default.min.css'
//import '../../css/owl.carousel.min.css'


import SungHyun from '../../images/O-SHYooLopez1.jpg'
import CAguas from '../../images/c-CAguas.jpg'
import JPina from '../../images/c-JPina.jpg'
import DrBaltazar from '../../images/doctorBaltazar.jpg'

class Teamrowcdo extends React.Component {
  render() {
    return (
      <div className="row" style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        marginTop: '2em',
        paddingTop: '4em',
        backgroundColor: '#416482',
        color: "#FFF",
        marginBottom: '2em',
        
      }}>
        <div className="mb-4 col-md-3">
          <div className="player mb-5">
            
            <img
              src={SungHyun}
              alt=""
              className="img-fluid image rounded-circle"
            />
            <h2>SungHyun Yoo-Lopez</h2>
            <span className="position">Owner</span>
          </div>
        </div>
        <div className="mb-4 col-md-3">
          <div className="player mb-5">
            
            <img
              src={CAguas}
              alt=""
              className="img-fluid image rounded-circle"
            />
            <h2>Chato Aguas</h2>
            <span className="position">Coach</span>
          </div>
        </div>
        <div className="mb-4 col-md-3">
          <div className="player mb-5">
            
            <img
              src={JPina}
              alt=""
              className="img-fluid image rounded-circle"
            />
            <h2>Jorge Piña</h2>
            <span className="position">Coach</span>
          </div>
        </div>
        <div className="mb-4 col-md-3">
          <div className="player mb-5">
            
            <img
              src={DrBaltazar}
              alt=""
              className="img-fluid image rounded-circle"
            />
            <h2>Baltazar</h2>
            <span className="position">Doctor</span>
          </div>
        </div>

      </div>
    );
  }
}

export default Teamrowcdo;
