import React from "react";
import Teamrowf1 from "./Teamrowf1";
import Teamrowm1 from "./Teamrowm1";
import Teamrowd1 from "./Teamrowd1";

import Teamrowg from "./Teamrowg";
import Teamrowcdo from "./Teamrowcdo";

import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
//import '../../css/bootstrap.min.css'
import '../../css/aos.css'
//import '../../css/owl.theme.default.min.css'
//import '../../css/owl.carousel.min.css'
import '../../css/jquery-ui.css'

import Team2 from '../../images/teamphoto2.jpg'



class Teamsection2 extends React.Component {
  render() {
    return (
      <div className="site-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <h1 className="text-black"
              style={{
                fontSize: '4rem',
                marginBottom: '1rem',
                marginTop: '1rem',
                fontFamily: 'Mukta, sans-serif',
                fontWeight: '700',
                lineHeight: '6rem',
               
              }}>White Tigers FC <br>
              </br>2019 Roster</h1>
            </div>
          </div>
          
          <Teamrowcdo />
          <Teamrowf1 />
          <Teamrowm1 />
          <Teamrowd1 />
          <Teamrowg />
          <img 
          src={Team2}
          alt=""
          className="img-fluid"
          marginTop="2rem"
          />
        
        </div>
      </div>
    );
  }
}

export default Teamsection2;
