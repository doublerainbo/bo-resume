const en = {
  'name': 'Bo Zhao',
  'title': 'Software Engineer',
  'lang_button': '中文',
  'lang_value': 'ch',
  'proficiencies_title': 'Technical Proficiencies',
  'proficiencies': [
    {'title': 'Python', 'description': 'Extensive experience coding in Python, utilizing best practices for maximum readability and minimal sadness.'},
    {'title': 'Kubernetes', 'description': 'Setting up clusters, designing tools for secure production environments, high level of understanding with k8s natives.'},
    {'title': 'Containers', 'description': 'Docker, cri-o. With hands-on experience to the OS level natives.'},
    {'title': 'AWS', 'description': 'Extensive usage of technologies such as EC2, ECS, S3, DynamoDB, IAM, and the list goes on...'},
    {'title': 'Config Management', 'description': 'Terraform, Packer, SaltStack. Automating generations of machines configurations and cloud resources.'},
    {'title': 'DevOps', 'description': 'Everyday devops things, deep diving into new codebases during incidents, hacking up scripts for fast fixes, being on linux, and keeping the gears turning day to day.'},
    {'title': 'Tooling', 'description': 'Continuous integration, developer tooling, bash scripting, etc. Empower other devs to be more productive.'},
    {'title': 'More?', 'description': 'Anything that isn’t already in there? That’s okay because I am a quick learner and can get settled in very quickly in a new environment.'},
  ],
  'degree': 'Bachelor of Applied Science',
  'program': 'Computer Engineering',
  'school': 'University of Waterloo 2016',
  'email_title': 'Email:',
  'email': 'bozhao12@gmail.com',
  'hobby_title': 'Hobby Projects:',
  'hobby_desc': 'I enjoy making some hardware projects in my downtime, such as:',
  'hobbies': [
    {'title': 'Sleep Tracking Hat', 'desc': 'Combining an EEG to measure brainwaves with audio cues to track sleep patterns and as a sleeping aid'},
    {'title': 'Music Controlled Lights', 'desc': 'Utilized various software algorithms to create a light show based on audio input'},
    {'title': 'IoT Synced Reminder Buttons', 'desc': 'A button that lights up for reminders that triggers at multiple locations and the state is synced across the devices'},
  ],
  'experiences_title': 'Work Experiences',
  'experiences': [
    {
      'title': 'Senior DevOps Engineer',
      'company': 'Juul Labs Inc.',
      'location': 'San Francisco, CA, USA',
      'timeline': 'Oct 2019 - Oct 2020',
      'points': [
        'Decreased infrastructure spend by 40%+ by analysing usage trends and rightsizing AWS resources',
        'Created service level dashboard monitoring with common generic metrics for bootstrapping new services',
        'Planned and executed database migrations involving multiple major revisions to all be on postgres 12 with no adverse effects'
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
  ],
}

export {en};
