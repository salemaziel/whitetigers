import React from "react";


import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
//import '../../css/bootstrap.min.css'
import '../../css/aos.css'
//import '../../css/owl.theme.default.min.css'
//import '../../css/owl.carousel.min.css'


import About2 from '../../images/team2.jpg'


class Aboutsection3 extends React.Component {
  render() {
    return (
      <div className="site-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 order-2">
              <img src={About2} alt="" className="img" />
            </div>
            <div className="col-md-6 pr-md-5">
              <h2 className="text-black">Dedicated Team</h2>
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

export default Aboutsection3;
