import React, { Component } from "react";

import Header from './header'
import Proficiencies from './proficiencies'
import AboutMe from './aboutme'
import Experiences from './experiences'
import './index.css'

export default class EnglishResume extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="resume-body">
          <Proficiencies />
          <AboutMe />
        </div>
        <Experiences />
      </div>
    );
  }
}
