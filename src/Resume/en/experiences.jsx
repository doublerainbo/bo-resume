import React, { Component } from "react";
import './experiences.css';
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
  const experiences = [
    {
      'title': 'Senior DevOps Engineer',
      'company': 'Juul Labs Inc.',
      'location': 'San Francisco, CA, USA',
      'timeline': 'Oct 2019 - Oct 2020',
      'points': [
        'Decreased development environment infrastructure spend by 50%+ by analysing usage trends and rightsizing AWS resources',
        'Created service level dashboard monitoring with common generic metrics for bootstrapping new services',
        'Planned and executed database migrations involving multiple major revisions to all be on postgres 12 without any errors'
      ],
    },
    {
      'title': 'Software Engineer',
      'company': 'Lyft Inc.',
      'location': 'San Francisco, CA, USA',
      'timeline': 'Jul 2016 - Sep 2019',
      'points': [
        'Enabled the transition of the company from a bare metal architecture to a Kubernetes-based architecture. This included the compute platform’s configuration, tooling, health metrics, and migration plans. This ensured a stable platform for the rest of the company to use',
        'Worked with three generations of infrastructure to ensure the legacy stack continues to operate while we converge the consistency of the systems',
        'Inherited older systems and developed tooling for better support for engineers to develop on a micro-service architecture, including development flow, CI, deployment, and production management'
      ],
    },
    {
      'title': 'Software Engineer (Intern)',
      'company': 'Yelp Inc.',
      'location': 'San Francisco, CA, USA',
      'timeline': 'Sep 2015 – Dec 2015',
      'points': [
        'Optimized the troubleshooting process of a widely used internal tool from a multi-minute process down to a matter of seconds',
        'Interacted with a wide range of infrastructure such as deploying PaaS services and maintaining Puppet configurations'
      ],
    }
  ];
  return _.map(experiences, generateExperience);
}

export default class Experiences extends Component {
  render() {
    return (
      <div>
        <h3>Work Experiences</h3>
        { generateExperiences() }
      </div>
    );
  }
}
