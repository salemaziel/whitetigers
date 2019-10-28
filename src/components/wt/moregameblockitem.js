import React from "react";

class moregameblockitem extends React.Component {
  render() {
    return (
      <div className="item">
        {}
        <div className="block-12">
          <figure>
            <img src="images/img_1.jpg" alt="" className="img-fluid" />
          </figure>
          <div className="text">
            <span className="meta">May 20th 2018</span>
            <div className="text-inner">
              <h2 className="heading mb-3">
                <a href="#" className="text-black">
                  hampionship
                </a>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                culpa, consectetur! Eligendi illo, repellat repudiandae cumque
                fugiat optio!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default moregameblockitem;
