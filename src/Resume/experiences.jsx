import React, { Component } from "react";
import './experiences.css';
import {en} from './en';
import {ch} from './ch';
import _ from 'lodash';

function createBulletPoint(text) {
  return (
    <div className="exp-bullet-point">
      <div className="bullet-point">></div>
      <div>{ text }</div>
    </div>
  )
}

function generateExperience(exp) {
  const title = exp['title']; // string
  const company = exp['company'];
  const location = exp['location'];
  const timeline = exp['timeline'];
  const points = exp['points']; // array[string]

  return (
    <div className="exp-block">
      <div className="company-info">
        <h4 className="title">{ title }</h4>
        <p className="company">{ company }</p>
        <p className="location">{ location }</p>
        <p className="timeline">{ timeline }</p>
      </div>
      <div>
        { _.map(points,createBulletPoint) }
      </div>
    </div>
  )

}

function generateExperiences() {
  var experiences;
  if (true) {
    experiences = en.experiences;
  } 
  return _.map(experiences, generateExperience);
}

export default class Experiences extends Component {
  render() {
    const text = this.props.language == 'en' ? en : ch;
    return (
      <div>
        <h3>{ text['experiences_title'] }</h3>
        { generateExperiences() }
      </div>
    );
  }
}
