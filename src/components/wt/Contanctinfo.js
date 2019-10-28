import React from "react";


import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'
import '../../css/aos.css'
//import '../../css/owl.theme.default.min.css'
//import '../../css/owl.carousel.min.css'
import '../../css/jquery-ui.css'




class Contanctinfo extends React.Component {
  render() {
    return (
      <div className="col-md-5">
        <div className="p-4 border mb-3 bg-white">
          <h4 className="mb-0">Contact</h4>
          <p className="mb-4">
            Sung Hyun Emmanuel Yoo Lopez
          </p>
          <h4 className="mb-0">Email</h4>
          <p className="mb-4">
          <a
          style={{
            color: 'blue',
            textDecoration: 'underline'
          }} 
          href="mailto:white_tigers.fc@outlook.com?subject=Mail from Website">Info@whitetigersfc.com</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Contanctinfo;
