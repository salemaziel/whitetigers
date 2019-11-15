import React from "react";
import Contactsectionrow from "./Contactsectionrow";


import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'
import '../../css/aos.css'
//import '../../css/owl.theme.default.min.css'
//import '../../css/owl.carousel.min.css'



class Contactsection2 extends React.Component {
  render() {
    return (
      <div style={{
        marginTop: '50px',
        paddingTop: '50px',
        marginBottom: '50px',
        paddingBottom: '50px',
      }}>
      <div className="site-section bg-light"
      style={{
        borderRadius: '15px',
      }}>
        <div className="container-fluid">
          <Contactsectionrow></Contactsectionrow>
        </div>
      </div>
      </div>
    );
  }
}

export default Contactsection2;
