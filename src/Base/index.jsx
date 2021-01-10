import React, { Component } from "react";

import Resume from 'Resume'
import './index.css'

export default class Base extends Component {
  render() {
    return (
      <div className='base-page'>
        <Resume />
      </div>
    );
  }
}
