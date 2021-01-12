import React, { Component } from "react";
import './aboutme.css';
import _ from 'lodash';
import {en} from './en';
import {ch} from './ch';

function generateHobbyEntry(entry) {
  const title = entry['title'];
  const desc = entry['desc'];
  return (
    <div>
      <strong className="hobby-text">{ title }</strong>
      <p className="hobby-text">{ desc }</p>
    </div>
  )
}

function hobbies(langSet) {
  return _.map(langSet['hobbies'], generateHobbyEntry);
}

export default class AboutMe extends Component {
  render() {
    const text = this.props.language === 'en' ? en : ch;
    return (
      <div className="aboutme">
        <h4>{ text['degree'] }</h4>
        <h4>{ text['program'] }</h4>
        <p>{ text['school'] }</p>
        <br/>
        <h4>{ text['email_title'] }</h4>
        <p>{ text['email'] }</p>
        <br/>
        <h4>{ text['hobby_title'] }</h4>
        <p>{ text['hobby_desc'] }</p>
        { hobbies(text) }
      </div>
    );
  }
}
