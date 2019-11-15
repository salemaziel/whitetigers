import React from "react";


import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
//import '../../css/bootstrap.min.css'
import '../../css/aos.css'
//import '../../css/owl.theme.default.min.css'
//import '../../css/owl.carousel.min.css'


import About1 from '../../images/team3.jpg'



class Aboutsection2 extends React.Component {
  render() {
    return (
      <div className="site-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={About1} alt="" className="img" />
            </div>
            <div className="col-md-6 pl-md-5">
              <h2 className="text-black">About White Tigers</h2>
              <p className="lead">
              White Tigers Futbol Club is an American Soccer club currently based in Escondido, Calif., and a new member of the United Premier Soccer League. White Tigers FC will begin play in the UPSL Western Conference.
              </p>
              <p>
              Founded in 2019, White Tigers FC can participate in the qualifying rounds for the Lamar Hunt U.S. Open Cup through their affiliation and membership with the UPSL, the U.S. Soccer Federation (USSF) and the United States Adult Soccer Association (USASA).
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Aboutsection2;
