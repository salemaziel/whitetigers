import React from "react";


import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
//import '../../css/bootstrap.min.css'
import '../../css/aos.css'
//import '../../css/owl.theme.default.min.css'
//import '../../css/owl.carousel.min.css'


import GMartinez from '../../images/m-GMartinez.jpg'
import IMendoza from '../../images/m-IMendoza.jpg'
import JHernandez from '../../images/m-JHernandez.jpg'

import JLFuentes from '../../images/m-JLFuentes.jpg'
import JVelazquez from '../../images/m-JorgeVelazquez.jpg'
import J2Velazquez from '../../images/m-JVelazquez.jpg'
import RCruz from '../../images/m-RCruz.jpg'


class Teamrowm1 extends React.Component {
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
              src={GMartinez}
              alt=""
              className="getbig img-fluid image rounded-circle"
            />
            <h2>Gustavo Martinez</h2>
            <span className="position">Midfield</span>
          </div>
        </div>
        <div className="mb-4 col-md-3">
          <div className="player mb-5">
            
            <img
              src={IMendoza}
              alt=""
              className="getbig img-fluid image rounded-circle"
            />
            <h2>Iván Mendoza</h2>
            <span className="position">Midfield</span>
          </div>
        </div>
        <div className="mb-4 col-md-3">
          <div className="player mb-5">
            
            <img
              src={JHernandez}
              alt=""
              className="getbig img-fluid image rounded-circle"
            />
            <h2>Joseph Hernandez</h2>
            <span className="position">Midfield</span>
            </div>
        </div>
        <div className="mb-4 col-md-3">
          <div className="player mb-5">
            
            <img
              src={JLFuentes}
              alt=""
              className="getbig img-fluid image rounded-circle"
            />
            <h2>José Luis Fuentes</h2>
            <span className="position">Midfield</span>
          </div>
        </div>
        <div className="mb-4 col-md-3">
          <div className="player mb-5">
            
            <img
              src={JVelazquez}
              alt=""
              className="getbig img-fluid image rounded-circle"
            />
            <h2>Jorge Velázquez</h2>
            <span className="position">Midfield</span>
          </div>
        </div>
        <div className="mb-4 col-md-3">
          <div className="player mb-5">
            
            <img
              src={J2Velazquez}
              alt=""
              className="getbig img-fluid image rounded-circle"
            />
            <h2>Juan Velázquez</h2>
            <span className="position">Midfield</span>
          </div>
        </div>
        <div className="mb-4 col-md-3">
          <div className="player mb-5">
            
            <img
              src={RCruz}
              alt=""
              className="getbig img-fluid image rounded-circle"
            />
            <h2>Rodrigo Cruz</h2>
            <span className="position">Midfield</span>
          </div>
        </div>
        
        </div>

    );
  }
}

export default Teamrowm1;
