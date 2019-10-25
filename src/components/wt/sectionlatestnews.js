import React from "react";
import latestnewsheadline from "./latestnewsheadline";
import latestnewsrow from "./latestnewsrow";

class sectionlatestnews extends React.Component {
  render() {
    return (
      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12 text-center">
              <latestnewsheadline></latestnewsheadline>
            </div>
          </div>
          <latestnewsrow></latestnewsrow>
        </div>
      </div>
    );
  }
}

export default sectionlatestnews;
