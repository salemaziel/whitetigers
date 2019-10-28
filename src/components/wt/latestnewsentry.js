import React from "react";

class latestnewsentry extends React.Component {
  render() {
    return (
      <div className="post-entry">
        <div className="image">
          <img src="images/img_1.jpg" alt="" className="img-fluid" />
        </div>
        <div className="text p-4">
          <h2 className="h5 text-black">
            <a href="#">RealMad vs Striker Who Will Win?</a>
          </h2>
          <span className="text-uppercase date d-block mb-3">
            <small>By Salem • Sep 25, 2018</small>
          </span>
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            beatae doloremque, ex corrupti perspiciatis.
          </p>
        </div>
      </div>
    );
  }
}

export default latestnewsentry;
