import React, { Component } from "react";
import './header.css'
import {en} from './en';
import {ch} from './ch';
function swapLanguage() {
  // this.renderEnglish = false;
}

export default class Header extends Component {
  render() {
    const text = this.props.language == 'en' ? en : ch;
    return (
      <div>
        <div className="header">
          <h1 className="my-name">{ text['name'] }</h1>
          <button className="site-navigation" 
                  onClick={() => this.props.onClick(text['lang_value'])} 
                  value={ text['lang_value'] }>{ text['lang_button'] }</button>
        </div>
        <hr/>
        <h4 className="my-title">{ text['title'] }</h4>
      </div>
    );
  }
}
