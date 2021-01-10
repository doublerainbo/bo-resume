import React, { Component } from "react";
import './header.css'

function swapLanguage() {
  // this.renderEnglish = false;
}

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1 className="my-name">Bo Zhao</h1>
          <button className="site-navigation" onClick={swapLanguage}>中文</button>
        </div>
        <hr/>
        <h4 className="my-title">Software Engineer</h4>
      </div>
    );
  }
}
