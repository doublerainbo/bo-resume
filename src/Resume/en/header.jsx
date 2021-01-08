import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="resume-body">
          <h1>Bo Zhao</h1>
          <button className="site-navigation">Chinese</button>
        </div>
        <h3>Software Engineer</h3>
        <hr/>
      </div>
    );
  }
}
