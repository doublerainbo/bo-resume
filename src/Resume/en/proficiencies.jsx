import React, { Component } from "react";
import './proficiencies.css';
import _ from "lodash";

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

function generateProficiencies() {
  const proficiencies = [
    {'title': 'Python', 'description': 'Extensive experience coding in Python, utilizing best practices for maximum readability and minimal sadness.'},
    {'title': 'Kubernetes', 'description': 'Setting up clusters, designing tools for secure production environments, high level of understanding with k8s natives.'},
    {'title': 'Containers', 'description': 'Docker, cri-o. Can’t do Kubernetes without containers.'},
    {'title': 'AWS', 'description': 'Extensive usage of technologies such as EC2, ECS, S3, DynamoDB, IAM, and the list goes on...'},
    {'title': 'Config Management', 'description': 'Terraform, Packer, SaltStack. Automating generations of machines configurations and cloud resources.'},
    {'title': 'DevOps', 'description': 'Everyday devops things, deep diving into new codebases during incidents, hacking up scripts for fast fixes, being on linux, and keeping the gears turning day to day.'},
    {'title': 'Tooling', 'description': 'Continuous integration, developer tooling, bash scripting, etc. Empower other devs to be more productive.'},
    {'title': 'More?', 'description': 'Anything that isn’t already in there? That’s okay because I am a quick learner and can get settled in very quickly in a new environment.'},
  ];
  return _.map(proficiencies, generateProficienciesLine);
}


export default class Proficiencies extends Component {
  render() {
    return (
      <div className="main-div">
        <h3>Proficiencies</h3>
        { generateProficiencies() }
      </div>
    );
  }
}
