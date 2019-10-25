import React from "react";
import latestnewsleftcol from "./latestnewsleftcol";
import latestnewscentercol from "./latestnewscentercol";
import latestnewsrightcol from "./latestnewsrightcol";

class latestnewsrow extends React.Component {
  render() {
    return (
      <div className="row">
        <latestnewsleftcol></latestnewsleftcol>
        <latestnewscentercol></latestnewscentercol>
        <latestnewsrightcol></latestnewsrightcol>
      </div>
    );
  }
}

export default latestnewsrow;
