const en = {
  'name': 'Bo Zhao',
  'title': 'Software Engineer',
  'lang_button': '中文',
  'lang_value': 'ch',
  'proficiencies_title': 'Technical Proficiencies',
  'proficiencies': [
    {'title': 'Python', 'description': 'Extensive experience coding in Python. Utilizes best practices for maximum readability and minimal sadness.'},
    {'title': 'Kubernetes', 'description': 'Cluster setup with or without cloud offerings. Tooling for secure production environments. High level of understanding with k8s natives.'},
    {'title': 'Containers', 'description': 'Docker, cri-o. Hands-on experience at the API layer and the OS level natives.'},
    {'title': 'AWS', 'description': 'Extensive usage of AWS technologies such as EC2, ECS, S3, DynamoDB, IAM, the list goes on...'},
    {'title': 'Config Management', 'description': 'Terraform, Packer, SaltStack. Been automating the setup of different types of machines configurations and cloud resources since I was 8 (not actually).'},
    {'title': 'DevOps', 'description': 'Everyday DevOps things, triaging the unknown during incidents, hacking up scripts for fast fixes, and keeping the gears turning day to day.'},
    {'title': 'Tooling', 'description': 'CI/CD, developer tooling, bash scripting, etc. Empower other devs to be more productive.'},
    {'title': 'And...', 'description': 'Also worked with technologies such as Go, Jenkins, Java, GCP, React, etc in the past. If this list needs expansion, I can quickly learn and adapt in a new environment.'},
  ],
  'degree': 'Bachelor of Applied Science',
  'program': 'Computer Engineering',
  'school': 'University of Waterloo 2016',
  'email_title': 'Email:',
  'email': 'bozhao12@gmail.com',
  'hobby_title': 'Hobby Projects:',
  'hobby_desc': 'I enjoy making some projects in my downtime, such as:',
  'hobbies': [
    {'title': 'Sleep Tracking Hat', 'desc': 'Track sleep patterns by combining an EEG to measure brainwaves and microphone for audio feedback.'},
    {'title': 'Music Controlled Lights', 'desc': 'Utilizing an Arduino to control RBG light patterns using sound as input data.'},
    {'title': 'IoT Synced Reminder Buttons', 'desc': 'A button that lights up for reminders that triggers at multiple locations and the state is synced across the devices'},
    {'title': 'Hungry and Indecisive?', 'desc': 'Find some food near you:', 'url': 'nooyoupick.com'}
  ],
  'experiences_title': 'Work Experiences',
  'experiences': [
    {
      'title': 'Software Engineer',
      'company': 'Sidewalk Labs',
      'location': 'New York, NY, USA',
      'timeline': 'Jun 2021 - Present',
      'points': [
        'Contributed in multiple facets of the Pebble parking sensors product, including firmware, backend and frontend software, and software infrastructure',
        'Lead the effort in setting up the software oncall rotation with actionable alarms and minimizing engineer producitivity loss',
      ],
    },
    {
      'title': 'Senior DevOps\nEngineer',
      'company': 'Juul Labs Inc.',
      'location': 'San Francisco, CA, USA',
      'timeline': 'Oct 2019 - Oct 2020',
      'points': [
        'Decreased infrastructure spend by 40%+ by analysing usage trends and rightsizing AWS resources',
        'Created service level Datadog dashboard monitoring with common generic metrics for bootstrapping new services',
        'Planned and executed multiple simultaneous database migrations involving multiple major revisions to postgres 12 with no loss in data or sales'
      ],
    },
    {
      'title': 'Software Engineer',
      'company': 'Lyft Inc.',
      'location': 'San Francisco, CA, USA',
      'timeline': 'Jul 2016 - Sep 2019',
      'points': [
        'Enabled the transition of the company from a bare metal architecture to a Kubernetes-based architecture. This included the compute platform’s orchestration, tooling, health metrics, and migration plans. Ensuring a stable platform for the rest of the company to use',
        'Maintained three generations of infrastructure to ensure the legacy stack continues to operate while the organization converged onto the desired state',
        'Developed tools to better support developing on an microservice architecture, including development flow, CI, deployment, and production orchestration'
      ],
    }
  ],
}

export {en};
