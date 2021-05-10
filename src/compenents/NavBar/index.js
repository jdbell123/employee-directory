import React from "react";
import "./style.css";

function Navbar() {

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 5,
        margin: 0
      }}
    />
  );

  return (
    <div>
      <div className="jumbotron jumbotron-fluid text-center bg-primary mb-0">
        <div className="header container">
          <h1 className="display-4 font-weight-bold text-white">Employee Directory</h1>
          <p className="lead text-white">Click on the column headers to sort the data in that column or use the search box to narrow/filter your results.</p>
        </div>
      </div>
      <ColoredLine color="red" />
    </div>
  );
}

export default Navbar;