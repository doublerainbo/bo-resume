import React, { Component } from "react";
import './aboutme.css';
import _ from 'lodash';
import {en} from './en';
import {ch} from './ch';

/*
Sleep Tracking Hat
Combining an EEG to measure brainwaves with audio cues to track sleep patterns and as a sleeping aid
Music Controlled Lights
Utilized various software algo- rithms to create a light show based on audio input
Alcohol Detector
Uses data from sensors to create a breathalyzer with high score features

*/

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

function hobbies() {
  const entries = [
    {'title': 'Sleep Tracking Hat', 'desc': 'Combining an EEG to measure brainwaves with audio cues to track sleep patterns and as a sleeping aid'},
    {'title': 'Music Controlled Lights', 'desc': 'Utilized various software algorithms to create a light show based on audio input'},
    {'title': 'IoT Synced Reminder Buttons', 'desc': 'A button that lights up for reminders that triggers at multiple locations and the state is synced across the devices'},
  ];

  return _.map(entries, generateHobbyEntry);
}

export default class AboutMe extends Component {
  render() {
    return (
      <div className="aboutme">
        <h4>Bachelor of Applied Science</h4>
        <h4>Computer Engineering</h4>
        <p>University of Waterloo, 2016</p>
        <br/>
        <h4>Email:</h4>
        <p>bozhao12@gmail.com</p>
        <br/>
        <h4>Hobby Projects:</h4>
        <p>I enjoy making some hardware projects in my downtime, such as:</p>
        { hobbies () }
      </div>
    );
  }
}
