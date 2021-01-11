import React, { Component } from "react";

import Header from './header'
import Proficiencies from './proficiencies'
import AboutMe from './aboutme'
import Experiences from './experiences'
import './index.css'

export default class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'language': 'en',
    }
  }

  changeLanguage(lang) {
    this.setState({
      'language': lang
    });
  }

  render() {
    return (
      <div className="resume-page">
        <div>
        <Header language={this.state.language} onClick={lang => this.changeLanguage(lang)} />
        <div className="resume-body">
          <Proficiencies language={this.state.language} />
          <AboutMe language={this.state.language} />
        </div>
        <Experiences language={this.state.language} />
      </div>
      </div>
    );
  }
}
