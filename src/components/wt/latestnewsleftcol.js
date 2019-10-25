import React from "react";
import latestnewsentry from "./latestnewsentry";

class latestnewsleftcol extends React.Component {
  render() {
    return (
      <div className="col-md-6 col-lg-4">
        <latestnewsentry></latestnewsentry>
      </div>
    );
  }
}

export default latestnewsleftcol;
