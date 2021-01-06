import React, { Component } from "react";

import EnglishResume from './en'
import ChineseResume from './ch'


export default class Base extends Component {
  render() {
    return (
      <div>
        <EnglishResume />
      </div>
    );
  }
}
