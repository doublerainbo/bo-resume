import React, { Component } from "react";

import Header from './header'
import Proficiencies from './proficiencies'

export default class EnglishResume extends Component {
  render() {
    return (
      <div>
        <Header />
        <Proficiencies />
      </div>
    );
  }
}
