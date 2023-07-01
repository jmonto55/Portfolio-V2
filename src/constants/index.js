import {
  mobile,
  ecrime,
  logo_w,
  microverse,
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
  next,
  meta,
  starbucks,
  tesla,
  shopify,
  quantumStocks,
  space,
  portfolio,
  threejs,
  rails,
  sass,
  express,
  ruby,
  jest,
  reactest,
  bookstore
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
    title: "Frontend with React & Redux",
    icon: web,
  },
  {
    title: "Backend with Prisma, & Ruby on Rails",
    icon: mobile,
  },
  {
    title: "Database with MongoDB & PostgreSQL",
    icon: backend,
  },
  {
    title: "Efficient remote team contributor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Next",
    icon: next,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "Three JS",
    icon: threejs,
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
    name: "Prisma",
    icon: express,
  },
  {
    name: "Ruby on Rails",
    icon: rails,
  },
  {
    name: "Git & GitHub",
    icon: git,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "React Test Lib",
    icon: reactest,
  },
];

const experiences = [
  {
    title: "Full-stack Developer",
    company_name: "Freelance",
    icon: logo_w,
    iconBg: "#1e1e1e",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Ruby on Rails and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Technical Support Engineer",
    company_name: "Microverse",
    icon: microverse,
    iconBg: "#282828",
    date: "April 2023 - Present",
    points: [
      "Carefuly reviewed more than 100 Pull Requests so far implementing features built with technologies like React, Redux, and Ruby on Rails",
      "Proposing improvements to code organization to improve code quality and overall performance.",
      "Providing advice and on how to manage complex projects using GitHub projects.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Project Engineer",
    company_name: "eCrime forense",
    icon: ecrime,
    iconBg: "#282828",
    date: "Jul 2020 - Jun 2022",
    points: [
      "Assisted in the implementation of secure architectures for various companies, resulting in substantial cost savings by preventing fraud.",
      "Conducted over 30 evaluations based on the NIST framework for companies of different sizes.",
    ],
  },
];

const projects = [
  {
    name: "Quantum Stocks",
    description:
      "Quantum Stocks is a web application where you can visualize detailed information about any stock traded in the six biggest markets.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "text-violet-700",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: quantumStocks,
    source_code_link: "https://github.com/jmonto55/Sotck-Viewer",
    live_demo_link: "https://sotck-viewer.vercel.app/",
  },
  {
    name: "Alpha Reservations",
    description:
      "Full-stack solution using React for the frontend and Ruby on Rails for the backend. Its primary purpose is to facilitate house reservations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Rails",
        color: "text-violet-700",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
    ],
    image: bookstore,
    source_code_link: "https://github.com/jmonto55/book-an-appointment-frontend",
    live_demo_link: "https://book-an-appointment-frontend-git-dev-jmonto55.vercel.app/",
  },
  {
    name: "SmartBudget",
    description:
      "SmartBudget is a full-stack CRUD application to manage your personal budget, fully tested with unit specs and integration specs.",
    tags: [
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Ruby on Rails",
        color: "pink-text-gradient",
      },
    ],
    image: space,
    source_code_link: "https://github.com/jmonto55/budget-app",
    live_demo_link: "https://rails-kb31.onrender.com",
  },
  {
    name: "This Portfolio",
    description:
      "A complete built from scratch React project with emphasis in UX and usage of advance libraries and packages like Framer Motion and Three Js.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Three",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/jmonto55/Portfolio-V2",
    live_demo_link: "https://portfolio-ci7x.onrender.com/",
  },
];

export { services, technologies, experiences, projects };
