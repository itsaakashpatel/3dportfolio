import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  bacancy,
  openxcell,
  stackshare,
  jobit,
  alorica,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "Bacancy Technology",
    icon: bacancy,
    iconBg: "#383E56",
    date: "July 2020 - Present",
    points: [
      "Architected a large-scale SaaS web application serving over a million users using React, Javascript, and GraphQL in an agile environment, with responsibilities including coding, code reviews, testing, bug fixes, daily standups, sprints, cross-functional collaboration, and deployments via CI/CD pipelines",
      "Developed a tech adoption and governance system using React Hooks, micro-frontend design patterns, and TypeScript, automating spreadsheet data sources, which drove 40% revenue growth and increased customer retention by 30%",
      "Reduced data processing execution time from 20 minutes to seconds by creating a tech stack data standard leveraging serverless AWS Lambda, S3, PostgreSQL, Docker, and Node.js, solving the problem of inefficient data processing",
      "Built a CLI tool using Node.js, REST APIs, and microservices architecture, replacing 3rd party GitHub/Azure APIs with optimized data models and caching, reducing cost and dependency, resulting in a 30% performance improvement",
      "Boosted website performance by 40%, and reduced bounce rate by 30% through optimizations such as enhancing core web vitals, adding server-side rendering, lazy-loading assets, and adhering to web accessibility standards (WCAG 2.1)"
    ],
  },
  {
    title: "Software Engineer",
    company_name: "OpenXCell Technolabs",
    icon: openxcell,
    iconBg: "#E6DEDD",
    date: "June 2018 - June 2020",
    points: [
      "Developed and optimized 3+ full-stack projects, collaborating with distributed teams, contributing to key product decisions, and aligning with business requirements",
      "Architected an employee wellness platform using React, Node.js, GraphQL, and MySQL with a user avatar builder, gamification, survey modules, and data analytics for managers, resulting in 50% improved work efficiency",
      "Achieved 40% operational efficiency optimization within a tight deadline by streamlining real-time job work log entries, serverless functions for payroll calculations, eliminated manual billing and payroll processes using AWS Lambda, Node.js, MongoDB, and Socket.io",
      "Spearheaded automated unit and end-to-end testing using Jest and Cypress, reducing manual testing efforts by 30%, expediting release cycles, and facilitating seamless end-to-end test automation",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I have had the opportunity to mentor Aakash when he was doing his Bachelor's. There are few kids that age who are diligent, punctual, soft spoken and always willing to learn and improve. Aakash is intelligent, dedicated, a very very quick learner, and very resourceful. I am glad to see his self mature through his professional career after university and believe any workplace is lucky to have him. Best wishes Aakash !",
    name: "Harshita Kanani",
    designation: "Core System Engineer",
    company: "Ford Motor Company",
    image: "https://media.licdn.com/dms/image/C5603AQEVsLSQbqvmKA/profile-displayphoto-shrink_100_100/0/1538066099028?e=1723680000&v=beta&t=cK5Jh1a_Y5o8S0j54iuf_Hx7_bHkmMOav9Gri10XszQ",
  },
  {
    testimonial:
      "Aakash joined my team with 1 year of prior experience. He is an enthusiastic learner and was willing to grow his knowledge. He was assigned to a project for React JS development but he soon managed to learn a little about node js and AWS too. He also tried his hands at machine learning. With experience, Aakash started giving the confidence that he was able to manage work well. He then went on to manage complex projects single handedly.",
    name: "Dimple Rudakia",
    designation: "Project managaer",
    company: "Bacancy Technology",
    image: "https://media.licdn.com/dms/image/C5103AQFP0KjHrAqZ8Q/profile-displayphoto-shrink_100_100/0/1565090693460?e=1723680000&v=beta&t=ZcKySUa8-cYcqlbltebuBqeGpITqUqYBBro5cykkXeU",
  },
  {
    testimonial:
      "Aakash is passionate about writing code and solving clients’ problems through the development of creative and innovative software. He is very sharp and take care of minor details. Apart from coding language, he is also passionate to identifying different tools that can help to move faster while coding and dev-ops side. His cross-function team work and communication is remarkable while he works on different projects simultaneously",
    name: "Jaimin Vaja",
    designation: "Engineering Manager",
    company: "Adjust",
    image: "https://media.licdn.com/dms/image/C4D03AQE_QEnY8vVntA/profile-displayphoto-shrink_100_100/0/1639423396765?e=1723680000&v=beta&t=ss2E57_7rSCqYo6NU2lvCNY2ci81Z5-GNRWmSkWoHzg",
  },
];

const projects = [
  {
    name: "Stackshare",
    description:
      "StackShare is a Tech Stack Intelligence platform and community helping teams to make data-driven technology decisions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "emotion",
        color: "pink-text-gradient",
      },
    ],
    image: stackshare,
    source_code_link: "https://stackshare.io/",
  },
  {
    name: "Inbriefs",
    description:
      "Identified a personal challenge with consuming lengthy news and blogs, leading me to develop a cross-platform mobile app built with React Native, Firebase, JSON APIs, and Node Js, to condense articles into 100-word summaries for more efficient reading.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://cln.sh/mhF0vGCH",
  },
  {
    name: "Alorica",
    description:
      "Alorica, the largest, certified minority-owned BPO is the digital customer experience partner of choice for innovative companies all over the world.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "styled-component",
        color: "pink-text-gradient",
      },
    ],
    image: alorica,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
