import React from "react";
import moregamecarouselrow from "./moregamecarouselrow";

class bgpictureparallaxbottom extends React.Component {
  render() {
    return (
      <div
        className="site-section block-13 bg-primary fixed overlay-primary bg-image"
        style={{
          backgroundImage: 'url("images/hero_bg_3.jpg")'
        }}
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12 text-center">
              <h2 className="text-white">More Game Highlights</h2>
            </div>
          </div>
          <moregamecarouselrow></moregamecarouselrow>
        </div>
      </div>
    );
  }
}

export default bgpictureparallaxbottom;
