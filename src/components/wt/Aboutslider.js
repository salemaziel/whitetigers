import React from "react";


import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'
import '../../css/aos.css'
//import '../../css/owl.theme.default.min.css'
//import '../../css/owl.carousel.min.css'
import '../../css/jquery-ui.css'

class Aboutslider extends React.Component {
  render() {
    return (
      <div className="slide-one-item owl-carousel">
        <div
          className="bg-image center overlay"
          style={{
            backgroundImage: 'url("images/hero_bg_1.jpg")'
          }}
        />
        <div
          className="bg-image center overlay"
          style={{
            backgroundImage: 'url("images/hero_bg_2.jpg")'
          }}
        />
        <div
          className="bg-image center overlay"
          style={{
            backgroundImage: 'url("images/hero_bg_3.jpg")'
          }}
        />
        <div
          className="bg-image center overlay"
          style={{
            backgroundImage: 'url("images/hero_bg_4.jpg")'
          }}
        />
      </div>
    );
  }
}

export default Aboutslider;
