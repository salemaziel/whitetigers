import React from "react";


import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'
import '../../css/aos.css'
//import '../../css/owl.theme.default.min.css'
//import '../../css/owl.carousel.min.css'
import '../../css/jquery-ui.css'

class Aboutsection2 extends React.Component {
  render() {
    return (
      <div className="site-section" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="images/about_1.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 pl-md-5">
              <h2 className="text-black">About White Tigers</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officiis inventore eius, doloremque fugiat id laudantium.
                Delectus quisquam voluptates deleniti incidunt, iusto magni
                mollitia rerum! Ex perspiciatis incidunt, laborum repellat illo.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                maxime eligendi sunt autem consequuntur minima, quidem iure,
                nisi laboriosam, nam nostrum saepe voluptatibus repellat quam
                reiciendis. Accusantium omnis facilis eligendi.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Aboutsection2;
