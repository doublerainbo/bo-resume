import React, { Component } from "react";
import './experiences.css';
import _ from 'lodash';

function createBulletPoint(text) {
  return (
    <div className="exp-bullet-point">
      <div className="bullet-point">•</div>
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
        <h4>{ title }</h4>
        <p>{ company }</p>
        <p>{ location }</p>
        <p>{ timeline }</p>
      </div>
      <div>
        { _.map(points,createBulletPoint) }
      </div>
    </div>
  )

}

function generateExperiences() {
  experiences = [

  ]
}

export default class Experiences extends Component {
  render() {
    return (
      <div>
        <h3>Work Experiences</h3>

      </div>
    );
  }
}
