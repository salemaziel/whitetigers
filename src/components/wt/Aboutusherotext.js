import React from "react";


import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'
import '../../css/aos.css'
//import '../../css/owl.theme.default.min.css'
//import '../../css/owl.carousel.min.css'
import '../../css/jquery-ui.css'


class Aboutusherotext extends React.Component {
  render() {
    return (
      <div
        className="col-md-6 text-center text-md-left"
        data-aos="fade-up"
        data-aos-delay={400}
      >
        <h1 className="bg-text-line">About Us</h1>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maxime
          velit nostrum praesentium voluptatem. Mollitia perferendis dolore
          dolores.
        </p>
      </div>
    );
  }
}

export default Aboutusherotext;
