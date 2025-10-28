export const projects = [
  {
    "title": "Artifact Lifecycle",
    "description": "Created a web portal to onboard artifacts and deploy them to different environment (UAT, QA, PROD). The portal allows a single as well as a batch deployment of the artifacts, the artifact’s deployment can be tracked as the polling is implemented to get the updated deployment status. Each action of the user on the portal is tracked and displayed as a history timeline. Various filters are implemented to make the user experience better so that its easier for the user to perform various tasks without vesting much time.",
    "technology": ["React JS", "Webpack", "Babel", "Jest", "Cypress", "Redux Zero"],
    "icon": process.env.PUBLIC_URL + '/projects/alc.png',
    "id": "artifact-lifecycle"
  },
  {
    "title": "UI Elements",
    "description": "Replaced the previously used Blueprint JS library with custom made UI components library called “elements”. Components worked on: Button, Switch, Radio, Checkbox, Alert, Dialog, Toaster, Toast, Callout, Tabs, Select, Input, Date Time Picker, Popover, Dynamic Table, Configurable Table etc.",
    "technology": ["React JS", "Webpack", "Babel", "Jest", "Styleguidist"],
    "icon": process.env.PUBLIC_URL + '/projects/ui-elements.png',
    "id": "ui-elements"
  },
  {
    "title": "UI Metrics",
    "description": "Created a web application to record the user button clicks, API Errors, JavaScript console errors, URL visited. The recorded metrics are then displayed as a bar graph and tables to provide insight into which applications are used most and what errors are occurring so that the development team can resolve it as soon as possible before the user reports it. The portal also gave insight into user habits and preferences thus helping us to improve the user journey further. It also provided a consolidated search form to procure this data and then download it into a file.",
    "technology": ["React JS", "Webpack", "Babel", "Jest", "Cypress", "Redux Zero", "React viz"],
    "icon": process.env.PUBLIC_URL + '/projects/ui-metrics.png',
    "id": "ui-metrics"
  },
  {
    "title": "Sparkola",
    "description": "A project explorer for all the spark jobs, with complete job preview and edit functionality. A feature to add new projects and delete multiple projects at a time. The project details includ a lineage graph, downloadable data, different job pipelines and dataset selector for each job. Further each job has its own kernel manager to build and release the job.",
    "technology": ["React Js", "Webpack", "Babel", "Jest", "Cypress", "Redux Zero"],
    "icon": process.env.PUBLIC_URL + '/projects/sparkola.png',
    "id": "sparkola"
  },
  {
    "title": "Jobserver",
    "description": "After building a job in Sparkola and releasing it, the job is imported into job server where multiple instances of this job can be executed and submitted to a yarn launcher, the real time execution status of these jobs is visible on the portal. Execution logs and reports of the executed jobs are all available here. Different actions like aborting a job, creating a similar job execution, passing runtime arguments to the job and etc. can all be performed through the portal.",
    "technology": ["React Js", "Webpack", "Babel", "Jest", "Cypress", "Redux Zero"],
    "icon": process.env.PUBLIC_URL + '/projects/jobserver.png',
    "id": "jobserver"
  },
  {
    "title": "Self Service Portal",
    "description": "A Portal to approve and request for different personas and rules, it allowed to create rules and personas for individual teams or at organization level. It is a one stop portal to see all the requested personas and status of the requests raised for different personas or rules.",
    "technology": ["React Js", "Webpack", "Babel", "Jest", "Cypress", "Redux Zero"],
    "icon": process.env.PUBLIC_URL + '/projects/self-service.png',
    "id": "self-service-portal"
  },
  {
    "title": "Billing",
    "description": "A Portal to display cost per month for the resources used by different ADA tenants. It displays per month analysis in form of pie charts and bar graphs and table.",
    "technology": ["React JS", "Webpack", "Babel", "Jest", "Cypress", "Redux Zero", "React viz"],
    "icon": process.env.PUBLIC_URL + '/projects/billing.png',
    "id": "billing"
  },
  {
    "title": "Kill Analog",
    "description": "A Public Web Portal for credit cards, debit cards and cash lines. It included working on microservices and creating REST APIs for these services.",
    "technology": ["Java", "Spring", "REST", "Angular JS", "iframes"],
    "icon": process.env.PUBLIC_URL + '/projects/killAnalog.png',
    "id": "kill-analog"
  },
  {
    "title": "Pay As You Go - Dehaadi",
    "description": "Onboard Daily Subscriptions, while pay and maintain records on the same platform",
    "technology": ["Kotlin", "Node JS", "Mongo DB"],
    "isHobby": true,
    "icon": process.env.PUBLIC_URL + '/projects/dehaadiDetails.png',
    "id": "pay-as-you-go"
  },
  {
    "title": "Website Walkthrough",
    "description": "A virtual assistant for the not so tech savvy people, it helps to get guided walkthrough of a website based on an individual’s query.",
    "technology": ["AWS Lex chatbot", "Angular JS", "Node JS"],
    "isHobby": true,
    "video": process.env.PUBLIC_URL + '/projects/genie_new.mp4',
    "icon": process.env.PUBLIC_URL + '/projects/genie.png',
    "id": "website-walkthrough"
  },
  {
    "title": "Electoral Voting Application",
    "description": "Based on Ethereum blockchain an application to vote for different candidates.",
    "technology": ["Ganache", "Ethereum Test Network", "Truffle", "Web3.js", "React JS"],
    "isHobby": true,
    "video": process.env.PUBLIC_URL + '/projects/voting_new.mp4',
    "icon": process.env.PUBLIC_URL + '/projects/voting.png',
    "id": "electoral-voting-application"
  }
];