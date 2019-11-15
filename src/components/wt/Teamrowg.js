import React from "react";


import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'
import '../../css/aos.css'
//import '../../css/owl.theme.default.min.css'
//import '../../css/owl.carousel.min.css'


import AGarcia from '../../images/g-AGarcia.jpg'
import CHernandez from '../../images/g-CHernandez.jpg'
import IdePaz from '../../images/g-IdePaz.jpg'
import LCervantes from '../../images/g-LCervantes.jpg'


class Teamrowg extends React.Component {
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
              src={AGarcia}
              alt=""
              className="getbig img-fluid image rounded-circle"
            />
            <h2>Alex García</h2>
            <span className="position">GoalKeeper</span>
          </div>
        </div>
        <div className="mb-4 col-md-3">
          <div className="player mb-5">
            
            <img
              src={CHernandez}
              alt=""
              className="getbig img-fluid image rounded-circle"
            />
            <h2>Carlos Hernandez</h2>
            <span className="position">GoalKeeper</span>
          </div>
        </div>
        <div className="mb-4 col-md-3">
          <div className="player mb-5">
            
            <img
              src={IdePaz}
              alt=""
              className="getbig img-fluid image rounded-circle"
            />
            <h2>Irving de Paz</h2>
            <span className="position">GoalKeeper</span>
          </div>
        </div>
        <div className="mb-4 col-md-3">
          <div className="player mb-5">
            
            <img
              src={LCervantes}
              alt=""
              className="getbig img-fluid image rounded-circle"
            />
            <h2>Lenny Islas Cervantes</h2>
            <span className="position">GoalKeeper</span>
          </div>
        </div>

      </div>
    );
  }
}

export default Teamrowg;
