/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

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
  username: "Nolan Young",
  title: "Hi there, I'm Nolan",
  subTitle:
    "Full-Stack Developer & IT Director with experience in building scalable applications, automating internal workflows, and aligning software architecture with business outcomes. Strong focus on clean code, DevOps, and cross-functional collaboration.",
  resumeLink: "https://nolanyoung.github.io/Nolan_Young_Final_Resume.pdf",
  displayGreeting: true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shibey7",
  linkedin: "https://www.linkedin.com/in/nolan-young-b4326329b/",
  gmail: "nolanyoung7@yahoo.com",
  gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/",
  medium: "https://medium.com/",
  stackoverflow: "https://stackoverflow.com/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "FULL-STACK DEVELOPMENT | SYSTEMS AUTOMATION | API INTEGRATION",
  skills: [
    "Design and develop scalable web apps, APIs, and internal tools using Python, PHP, C#, and JavaScript.",
    "Automate internal workflows and infrastructure using Git, CI/CD pipelines, and DevOps best practices.",
    "Build responsive, user-focused interfaces and eCommerce systems with optimized UX and secure integrations."
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

 softwareSkills: [
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "PHP", fontAwesomeClassname: "fab fa-php" },
    { skillName: "C#", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git" },
    { skillName: "GitHub", fontAwesomeClassname: "fab fa-github" },
    { skillName: "CI/CD", fontAwesomeClassname: "fas fa-cogs" },
    { skillName: "RESTful APIs", fontAwesomeClassname: "fas fa-plug" },
    { skillName: "WordPress", fontAwesomeClassname: "fab fa-wordpress" },
    { skillName: "WooCommerce", fontAwesomeClassname: "fas fa-shopping-cart" }
  ],
  display: true
};

// Education Section


const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "SUNY Adirondack / SUNY Oswego",
      logo: require("./assets/images/educationLogo.png"),
      subHeader: "A.S. in Computer Science (In Progress)",
      duration: "September 2022 – May 2024",
      desc: "Coursework in Data Structures (C++), Computer Systems, Discrete Math, Calculus I & II, and Linear Algebra.",
      descBullets: [
        "Projects in algorithms, object-oriented design, and systems programming.",
        "Strong academic foundation in both theory and application."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "90%" },
    { Stack: "Backend",         progressPercentage: "80%" },
    { Stack: "DevOps & Automation", progressPercentage: "75%" }
  ],
  displayCodersrank: false
};

// Work experience section

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Full Stack Developer & IT Director",
      company: "Grasshopper Gardens",
      companylogo: require("./assets/images/grasshopperLogo.png"),
      date: "Feb 2024 – Present",
      desc: "Architected and delivered full-stack applications, internal tools, and eCommerce platforms. Led DevOps strategy with Git-based CI/CD, OAuth2 integrations, and infrastructure automation.",
      descBullets: [
        "Built Python/Flask APIs and integrated secure OAuth 2.0 workflows.",
        "Developed WordPress/WooCommerce and Shopify solutions, improving UX and increasing leads by 60%.",
        "Automated deployments with GitHub Actions, reducing manual releases by 80% and ensuring 99.9% uptime."
      ]
    },
    {
      role: "Project Manager",
      company: "Young’s Home Improvement",
      companylogo: require("./assets/images/homeImprovementLogo.png"),
      date: "Jun 2017 – Present",
      desc: "Managed end-to-end residential and commercial construction projects, overseeing budgets, schedules, and compliance.",
      descBullets: [
        "Coordinated multi-trade crews and enforced safety and building code standards.",
        "Introduced digital tracking tools, improving project transparency and client satisfaction."
      ]
    },
    {
      role: "Landscape Engineer",
      company: "Grasshopper Gardens",
      companylogo: require("./assets/images/grasshopperLogo.png"),
      date: "Nov 2023 – Feb 2024",
      desc: "Created CAD-driven 3D landscape models and technical proposals to secure new contracts.",
      descBullets: [
        "Generated accurate cost estimates and scope documents for competitive bids.",
        "Sourced sustainable materials and coordinated logistics to meet budget and timeline goals."
      ]
    },
    {
      role: "Maintenance Mechanic",
      company: "Essity",
      companylogo: require("./assets/images/essityLogo.png"),
      date: "May 2021 – Sep 2022",
      desc: "Maintained industrial paper machines and implemented preventive maintenance programs.",
      descBullets: [
        "Reduced downtime via real-time diagnostics and scheduled maintenance.",
        "Ensured production and safety compliance through precise setups and calibrations."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

// Big Projects Section
const bigProjects = {
  title: "Featured Projects",
  subtitle: "A selection of projects showcasing full-stack, API, and automation expertise",
  projects: [
    {
      image: require("./assets/images/project1.png"),
      projectName: "Inventory Sync Automation",
      projectDesc: "Automated syncing between SOS Inventory and WooCommerce using C# and REST APIs, reducing manual errors by 95%.",
      footerLink: [
        { name: "View Code", url: "https://github.com/nolanyoung/InventorySync" }
      ]
    },
    {
      image: require("./assets/images/project2.png"),
      projectName: "LeadGen Dashboard",
      projectDesc: "Built a React + Flask dashboard tracking user engagement and lead metrics, increasing lead visibility by 60%.",
      footerLink: [
        { name: "Live Demo", url: "https://nolanyoung.github.io/leadgen-dashboard" },
        { name: "Source", url: "https://github.com/nolanyoung/LeadGenDashboard" }
      ]
    },
    {
      image: require("./assets/images/project3.png"),
      projectName: "Desktop Field Utility",
      projectDesc: "Developed a C# WinForms app for field teams to sync work orders with central MySQL DB, improving data accuracy and offline support.",
      footerLink: [
        { name: "Download", url: "https://nolanyoung.github.io/field-utility" }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Key accomplishments and certifications across my career",
  achievementsCards: [
    {
      title: "UI/UX LeadGen Improvement",
      subtitle: "Increased inbound lead volume by 60% through UI/UX overhaul",
      image: require("./assets/images/uxAward.png"),
      imageAlt: "UX Improvement",
      footerLink: [{ name: "Case Study", url: "https://nolanyoung.github.io/ux-case-study" }]
    },
    {
      title: "CI/CD Automation",
      subtitle: "Reduced deployment errors by 80% using GitHub Actions pipelines",
      image: require("./assets/images/cicdLogo.png"),
      imageAlt: "CI/CD Automation",
      footerLink: [{ name: "Pipeline Docs", url: "https://github.com/nolanyoung/ci-cd-config" }]
    }
  ],
  display: true
};
// Blogs Section
// Blog Section
const blogSection = {
  title: "Blogs & Articles",
  subtitle: "Sharing insights on development, DevOps, and automation",
  displayMediumBlogs: false,
  blogs: [
    {
      url: "https://nolanyoung.dev/blog/aws-ci-cd-pipeline",
      title: "Automating AWS Deployments with GitHub Actions",
      description: "A step-by-step guide to building CI/CD pipelines for AWS-hosted applications."
    }
  ],
  display: true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
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
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  resumeSection
};
