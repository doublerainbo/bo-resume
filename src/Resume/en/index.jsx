const en = {
  'name': 'Bo Zhao',
  'title': 'Software Engineer',
  'lang_button': '中文',
  'lang_value': 'ch',
  'proficiencies_title': 'Technical Proficiencies',
  'proficiencies': [
    {'title': 'Python', 'description': 'Extensive experience coding in Python. Utilizes best practices for maximum readability.'},
    {'title': 'AWS & GCP', 'description': 'Cloud management in both AWS and GCP with its various offerings.'},
    {'title': 'LLM Agents', 'description': 'Agentic implementations of features and model prompting.'},
    {'title': 'Kubernetes', 'description': 'High level of understanding with k8s natives and operational expertise.'},
    {'title': 'Containers', 'description': 'Docker, cri-o. Hands-on experience at the API layer and the OS level natives.'},
    {'title': 'DevOps', 'description': 'Everyday DevOps things, triaging the unknown during incidents, hacking up scripts for fast fixes, and keeping the gears turning day to day.'},
    {'title': 'Tooling', 'description': 'CI/CD, developer tooling, bash scripting, etc. Empower other devs to be more productive.'},
  ],
  'degree': 'Bachelor of Applied Science',
  'program': 'Computer Engineering',
  'school': 'University of Waterloo 2016',
  'email_title': 'Email:',
  'email': 'bozhao12@gmail.com',
  'hobby_title': 'Hobby Projects:',
  'hobby_desc': 'I enjoy making some projects in my downtime, such as:',
  'hobbies': [
    {'title': 'IoT Synced Reminder Buttons', 'desc': 'A button that lights up for reminders that triggers at multiple locations and the state is synced across the devices'},
    {'title': 'Hungry and Indecisive?', 'desc': 'Find some food near you:', 'url': 'nooyoupick.com'},
  ],
  'experiences_title': 'Work Experiences',
  'experiences': [
    {
      'title': 'Software Engineer',
      'company': 'Google / Sidewalk Labs',
      'location': 'New York, NY, USA',
      'timeline': 'Jun 2021 - Present',
      'points': [
        'Analyzed and reduced Google Earth Gemini agent latency from 60s+ to <10s range',
        'Lead the 0-to-1 design and development of the Earth LLM backend service',
        'Implemented and automated multiple ETL pipelines for applications such as ML input and data aggregation',
        'Lead the effort in setting up the software oncall rotation with actionable alarms and minimizing engineer producitivity loss',
        'Contributed in multiple facets of the Pebble parking sensors product by maintaining the infrastructure setup and implementing features in backend and frontend',
        'Drove the migration of the backend stack from GCP to internal Google infrastructure',
      ],
    },
    {
      'title': 'Senior DevOps\nEngineer',
      'company': 'Juul Labs',
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
      'company': 'Lyft',
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
