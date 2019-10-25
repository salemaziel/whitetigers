import React from "react";

import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'

class Subscribe extends React.Component {
  render() {
    return (
      <div className="mb-5">
        <h3 className="footer-heading mb-2">Subscribe Newsletter</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit minima minus
          odio.
        </p>
        <form action="#" method="post">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control border-secondary text-white bg-transparent"
              placeholder="Enter Email"
              aria-label="Enter Email"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                type="button"
                id="button-addon2"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Subscribe;
