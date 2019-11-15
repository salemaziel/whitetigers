import React from "react";
import Contanctinfo from "./Contanctinfo";


import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'
import '../../css/aos.css'
//import '../../css/owl.theme.default.min.css'
//import '../../css/owl.carousel.min.css'





class Contactsectionrow extends React.Component {
  render() {
    return (
      <div className="row align-items-first">
        <div className="col-md-7" contactform>
          <form action="#" method="post" className="bg-white">
            <div className="p-3 p-lg-5 border">
              <div className="form-group row">
                <div className="col-md-6">
                  <label htmlFor="c_fname" className="text-black">
                    First Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="c_fname"
                    name="c_fname"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="c_lname" className="text-black">
                    Last Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="c_lname"
                    name="c_lname"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <label htmlFor="c_email" className="text-black">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="c_email"
                    name="c_email"
                    placeholder
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <label htmlFor="c_subject" className="text-black">
                    Subject{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="c_subject"
                    name="c_subject"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <label htmlFor="c_message" className="text-black">
                    Message{" "}
                  </label>
                  <textarea
                    name="c_message"
                    id="c_message"
                    cols={30}
                    rows={7}
                    className="form-control"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-12">
                  <input
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                    defaultValue="Send Message"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <Contanctinfo></Contanctinfo>
      </div>
    );
  }
}

export default Contactsectionrow;
