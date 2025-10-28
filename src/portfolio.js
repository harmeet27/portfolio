/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import { recommendations } from "./data/recommendations";

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Harmeet Kaur",
  title: "Hi all, I'm Harmeet",
  subTitle: emoji(`Engineering leader specializing in frontend development and scalable systems. I bridge technical excellence with team growth—creating environments where engineers thrive, architecture stays clean, and users stay delighted.`),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "harmeetkaur2793@gmail.com",
  instagram: "https://www.instagram.com/theserendipitycode/",
  topmate: "https://topmate.io/harmeet_kaur27",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Location
const address = {
  city: "Berlin, Germany",
  home: "Chandigarh, India",
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "A frontend-focused engineering leader passionate about building seamless, high-performance web experiences and empowering teams to excel",
  skills: [
    emoji(
      "⚡ Lead teams that craft highly interactive, user-centered interfaces for scalable web applications"
    ),
    emoji("⚡ Brings structure and scalability through component-driven design, clean architecture, and performance-first principles"),
    emoji(
      "⚡ Drive engineering excellence by fostering collaboration, code quality, and a culture of continuous learning"
    ),
    emoji(
      "⚡ Dedicated to mentorship and inclusion, actively championing Women in Tech and nurturing the next generation of frontend engineers"
    ),
    emoji(
      "⚡ Collaborates closely with design and product teams to deliver beautiful, accessible, and meaningful user experiences"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */
  softwareSkills: [
    { skillName: "html", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css", fontAwesomeClassname: "fab fa-css3" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
    { skillName: "npm", fontAwesomeClassname: "fab fa-npm" },
    { skillName: "yarn", fontAwesomeClassname: "fab fa-yarn" },
    { skillName: "java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "90%" },
    { Stack: "Backend", progressPercentage: "70%" },
    { Stack: "Programming", progressPercentage: "60%" }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Engineering Lead",
      company: "Zalando",
      companylogo: require("./assets/companies/zalando.png"),
      date: "May 2022 – Present",
      desc: `Driving scalable frontend initiatives and leading a high-performing team to deliver impactful user experiences on Europe’s leading fashion and lifestyle platform`,
      descBullets: [
        "Promoted twice in 3 years — now leading a team of 6 engineers delivering large-scale frontend initiatives",
        "Drive roadmap execution and collaborate with Product and Design to deliver seamless user experiences",
        "Mentor engineers, run agile ceremonies, and foster a culture of ownership and continuous improvement",
        "Modernized frontend stack (React, TypeScript, GraphQL) to improve performance and scalability by 40%",
        "Balance hands-on coding with strategic planning to ensure timely, high-quality releases"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Paytm",
      companylogo: require("./assets/companies/paytm.jpg"),
      date: "Nov 2020 – May 2022",
      desc: "Delivered high-performance frontend solutions for one of India’s leading digital payment and financial services platforms, enhancing user experience and platform scalability",
      descBullets: [
        "Led frontend development for high-scale payment and merchant systems, implementing a microfrontend architecture for modular, maintainable applications",
        "Played a key role in migrating services from on-premise data centers to AWS cloud, improving scalability and resilience",
        "Provided 24x7 on-call support, resolving production issues and performing live fixes to ensure uninterrupted services",
        "Collaborated with cross-functional teams to design and deliver scalable, production-ready frontend solutions",
        "Mentored junior engineers and established best practices for maintainable, high-quality code"
      ]
    },
    {
      role: "Software Engineer",
      company: "Development Bank of Singapore",
      companylogo: require("./assets/companies/dbs.jpg"),
      date: "Nov 2017 – Nov 2020",
      desc: "Software Engineer at DBS Singapore — transitioned from backend Java development to frontend, delivering user-facing banking solutions and scalable web applications.",
      descBullets: [
        "Started as a Java backend developer and transitioned to frontend, gaining full-stack experience in banking applications",
        "Designed and developed responsive, production-ready UI components using JavaScript and React",
        "Collaborated with product and backend teams to gather requirements and deliver secure, scalable banking features",
        "Optimized application performance and enhanced usability across web and mobile platforms",
      ]
    },
    {
      role: "Software Engineer",
      company: "Infosys",
      companylogo: require("./assets/companies/infosys.jpg"),
      date: "Sep 2015 – Nov 2017",
      desc: "Joined right after graduation, trained in Python and SAP ABAP, delivering enterprise-grade solutions for production SAP systems.",
      descBullets: [
        "Trained in Python and SAP ABAP, building strong foundations in backend development and enterprise software engineering",
        "Developed and deployed SAP ABAP modules for production systems, implementing business logic and process automation",
        "Collaborated with functional and technical teams to design scalable solutions aligned with client requirements",
        "Ensured high code quality, maintainability, and proper documentation following enterprise standards",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Projects",
  subtitle: "Played a key role in shaping the technology and teams behind the companies I’ve been part of",
  projects: [
    {
      id: "artifact-lifecycle",
      image: require("./assets/alc.png"),
      projectName: "Artifact Lifecycle",
      projectDesc: "Developed a web portal for onboarding and deploying artifacts across multiple environments, featuring batch deployments, real-time status tracking, action history, and intuitive filters for an enhanced user experience.",
      footerLink: [
        { name: "View Details", url: "/project/artifact-lifecycle" }
        //  you can add extra buttons here.
      ]
    },
    {
      id: "ui-elements",
      image: require("./assets/ui-elements.png"),
      projectName: "UI Elements",
      projectDesc: "Replaced Blueprint JS with a custom UI component library “Elements,” building reusable components like Buttons, Switches, Alerts, Dialogs, Tables, and more to standardize and streamline the frontend.",
      footerLink: [
        { name: "View Details", url: "/project/ui-elements" }
      ]
    },
    {
      id: "ui-metrics",
      image: require("./assets/ui-metrics.png"),
      projectName: "UI Metrics",
      projectDesc: "Developed a web application to track user interactions, API and JS errors, and visited URLs, providing analytics dashboards, downloadable reports, and insights to optimize user experience and proactively resolve issues",
      footerLink: [
        { name: "View Details", url: "/project/ui-metrics" }
      ]
    },
    {
      id: "sparkola",
      image: require("./assets/sparkola.png"),
      projectName: "Sparkola",
      projectDesc: "Developed a project explorer for Spark jobs with full preview and edit capabilities, supporting project creation/deletion, lineage graphs, dataset selection, downloadable data, and per-job kernel management for build and release",
      footerLink: [
        { name: "View Details", url: "/project/sparkola" }
      ]
    },
    {
      id: "jobserver",
      image: require("./assets/jobserver.png"),
      projectName: "Jobserver",
      projectDesc: "Built a portal to manage Spark jobs, enabling job execution on YARN, real-time status tracking, log/report access, and actions like aborting, cloning, and passing runtime argument",
      footerLink: [
        { name: "View Details", url: "/project/jobserver" }
      ]
    },
    {
      id: "self-service-portal",
      image: require("./assets/self-service.png"),
      projectName: "Self Service Portal",
      projectDesc: "Developed a centralized portal to create, request, and approve personas and rules at team or organization level, providing visibility into request statuses and streamlining access management",
      footerLink: [
        { name: "View Details", url: "/project/self-service-portal" }
      ]
    },
    {
      id: "billing",
      image: require("./assets/billing.png"),
      projectName: "Billing",
      projectDesc: "Developed a portal to visualize monthly resource costs for ADA tenants, presenting data through pie charts, bar graphs, and tables for easy analysis",
      footerLink: [
        { name: "View Details", url: "/project/billing" }
      ]
    },
    {
      id: "kill-analog",
      image: require("./assets/killAnalog.png"),
      projectName: "Kill Analog",
      projectDesc: "Developed a public web portal for credit cards, debit cards, and cash lines, building microservices and creating REST APIs to support the platform",
      footerLink: [
        { name: "View Details", url: "/project/kill-analog" }
      ]
    },
    {
      id: "pay-as-you-go",
      image: require("./assets/dehaadiCreate.jpeg"),
      projectName: "Pay as you go - Dehaadi",
      projectDesc: "Onboard Daily Subscriptions, while pay and maintain records on the same platform",
      footerLink: [
        { name: "View Details", url: "/project/pay-as-you-go" }
      ]
    },
    {
      id: "website-walkthrough",
      image: require("./assets/genie.png"),
      projectName: "Website Walkthrough",
      projectDesc: "A virtual assistant for the not so tech savvy people, it helps to get guided walkthrough of a website based on an individual’s query.",
      footerLink: [
        { name: "View Details", url: "/project/website-walkthrough" }
      ]
    },
    {
      id: "electoral-voting-application",
      image: require("./assets/voting.png"),
      projectName: "Electoral Voting Application",
      projectDesc: "Based on Ethereum blockchain an application to vote for different candidates.",
      footerLink: [
        { name: "View Details", url: "/project/electoral-voting-application" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8375048275 / +49-17661425699",
  email_address: "harmeetkaur2793@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const recommendationSection = {
  display: true, // Set false to hide this section, defaults to true
  recommendations: [{
    name: "Andrea Pace",
    designation: "Senior Software Engineer",
    company: "Zalando",
    image: require("./assets/recommendation/andrea.jpeg"),
    recommendation:
      `I've had the pleasure of working with Harmeet at Zalando, and she is truly outstanding as a Senior Frontend Engineer. Her technical skills are top-notch, always delivering elegant and efficient solutions to complex problems. Harmeet's deep knowledge of modern frontend technologies and her keen analytical mind ensure our projects run smoothly and exceed user expectations. Her analytical mindset, often lets her anticipate potential issues before they arise and address them proactively.
      What really sets Harmeet apart is her leadership. When our engineering manager was unavailable, she stepped up and led the team confidently and clearly. Her communication skills and positive attitude kept us all motivated and on track. She's not just a leader by title but by action, always ready to support and guide her colleagues.
      Harmeet is also incredibly generous with her knowledge, mentoring other developers and fostering a collaborative team spirit. She's a joy to work with, and her dedication and expertise make her an invaluable asset to any team.`
  },
  {
    name: "Shivam Tyagi",
    designation: "Senior Technical Lead",
    company: "Paytm",
    image: require("./assets/recommendation/shivam.jpeg"),
    recommendation:
      `Harmeet is one of the best colleague you could have in your team. Her expertise as a developer is considerable, and it helped our team come up with more efficient solutions on different projects. Her contribution is valuable to the side, and I highly recommend Harmeet and would love to work with her again.`
  },
  {
    name: "Aloysius Lim",
    designation: "Frontend Engineer",
    company: "DBS",
    image: require("./assets/recommendation/aloysius.jpeg"),
    recommendation:
      `Working with Harmeet was an great experience! She possesses a strong technical expertise and a great personality to work with. Having her in the team really helped get stuff done quickly and effectively. Knowing that you could easily reach out to her for any questions, bounce off ideas and working together with her, I’m sure that she can surely bring value and change to any organization that she joins! Thank you Harmeet for the good working experience and crossing of paths! I know you’ll surely do good and become an ever more seasoned developer and all the best!`
  },
  {
    name: "Ayan Pal",
    designation: "Senior Engineering Manager",
    company: "Walmart",
    image: require("./assets/recommendation/ayan.jpeg"),
    recommendation:
      `Harmeet is a highly skilled developer. At Paytm she has excelled in taking difficult and mission-critical projects which require someone to quickly learn new technologies or do deep research for some difficult problems. I wish her all the best for all future endeavours.`
  },
  {
    name: "Manikanta Tankala",
    designation: "Senior UI Developer",
    company: "DBS",
    image: require("./assets/recommendation/mani.jpeg"),
    recommendation:
      `Harmeet is a professional developer with much focus on user experience. She learns new things, takes feedback well, implements new features with ease and collaborates well with other users. She is always a great asset to any team she works with.`
  },
  {
    name: "Mark Sinapilo",
    designation: "Engineering Lead",
    company: "DBS",
    image: require("./assets/recommendation/mark.jpeg"),
    recommendation:
      `Harmeet is an excellent developer. She is focused, resourceful and a team player. She learns fast and not afraid to try new technologies. I have enjoyed working with Harmeet and would be happy to work with her again. She is definitely a great addition to any team she joins.`
  },
  {
    name: "Yury Shevchenko",
    designation: "Senior Frontend Engineer",
    company: "AWS",
    image: require("./assets/recommendation/yury.jpeg"),
    recommendation:
      `Harmeet is a developer with a lot of potential; she has grown a lot in the two years that we worked together. She takes feedback well, she is eager to learn, and she makes considerable effort to become better. She's a good team player, she can productively collaborate with other teams, and she can work independently on solo projects to deliver them on time. `
  },
  {
    name: "Arvind Sinha",
    designation: "Engineering Lead",
    company: "JP Morgan",
    image: require("./assets/recommendation/arvind.jpeg"),
    recommendation:
      `Harmeet is one of the brightest mind I have worked with. She is very sharp and has been very successful in providing complex solutions. I have seen some of the very innovative solutions that she has worked ,and at the same time she has phenomenal presentation skill to present the idea and sell. Keep doing great work, have high expectations from her to contribute in the transformation journey that we are into.`
  },
  {
    name: "Ankur Khera",
    designation: "Head of Innovation",
    company: "DBS",
    image: require("./assets/recommendation/ankur.jpeg"),
    recommendation:
      `Harmeet is from the tribe of innovators at DBS who is self driven, is a a quick learner, ambitious, skilled at experimentation and strive to be at the cutting edge of technology. She is super committed who has repeatedly shown her desire to build futuristic solutions and is writing the script for the future! `
  },
  {
    name: "Saurav Mishra",
    designation: "Technology Lead",
    company: "Infosys",
    image: require("./assets/recommendation/saurav.jpeg"),
    recommendation:
      `Harmeet has worked with me for almost a year and one trait on her that i can definitely vouch for is diligence. It's rare to come by. 
Keep shining!! `
  }]
}

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  address,
  recommendationSection
};
