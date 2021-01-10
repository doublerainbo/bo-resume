import React, { Component } from "react";

import EnglishResume from './en';
import ChineseResume from './ch';
import './index.css'

export default class Resume extends Component {
  render() {
    this.renderEnglish = true;
    return (
      <div className="resume-page">
        { this.renderEnglish ?
        <EnglishResume /> :
        <ChineseResume />
        }
      </div>
    );
  }
}
