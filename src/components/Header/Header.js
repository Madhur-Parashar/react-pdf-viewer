import React, { Component } from "react";

import "./header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="b-header-container">
          <div className="b-header-logo">LOGO</div>
          <div className="b-header-heading">SATRAACHEE</div>
          <div className="b-header-about">ABOUT</div>
        </div>
      </div>
    );
  }
}

export default Header;
