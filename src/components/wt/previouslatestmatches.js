import React from "react";
import previousupcomingtabs from "./previousupcomingtabs";
import previousupcomingtabcontent from "./previousupcomingtabcontent";

class previouslatestmatches extends React.Component {
  render() {
    return (
      <div className="col-md-12">
        <h2 className="h6 text-uppercase text-black font-weight-bold mb-3">
          Latest Matches
        </h2>
        <div className="site-block-tab">
          <previousupcomingtabs></previousupcomingtabs>
          <previousupcomingtabcontent></previousupcomingtabcontent>
        </div>
      </div>
    );
  }
}

export default previouslatestmatches;
