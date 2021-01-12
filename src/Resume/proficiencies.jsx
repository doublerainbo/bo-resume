import React, { Component } from "react";
import './proficiencies.css';
import _ from "lodash";
import {en} from './en';
import {ch} from './ch';

function generateProficienciesLine(entry) {
  const title = entry['title'];
  const description = entry['description'];
  return (
    <div className="pro-row">
      <div className="pro-title">{ title }</div>
      <div className="pro-desc">{ description }</div>
    </div>
  )
}

function generateProficiencies(langSet) {
  return _.map(langSet['proficiencies'], generateProficienciesLine);
}


export default class Proficiencies extends Component {
  render() {
    const text = this.props.language === 'en' ? en : ch;
    return (
      <div className="main-div">
        <h3>{ text['proficiencies_title'] }</h3>
        { generateProficiencies(text) }
      </div>
    );
  }
}
