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
    title: "Backend with Node & RoR",
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
    name: "Express",
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
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Code Reviewer & Mentor",
    company_name: "Microverse",
    icon: microverse,
    iconBg: "#282828",
    date: "April 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
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
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    live_demo_link: "https://stock-viewer.onrender.com/",
  },
  {
    name: "Space Traveler's Hub",
    description:
      "Space Traveler's Hub is a web application that displays SpaceX rockets and missions, users can join/leave missions or reserve/cancel rockets.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: space,
    source_code_link: "https://github.com/jmonto55/Space-Travelers-Hub",
    live_demo_link: "https://space-travelers-hub-27nq.onrender.com/",
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
  {
    name: "Bookstore",
    description:
      "BookStore is a web application inspired by books, it has two routes: home, and a categories route containing a full list of books which you can review, comment or remove.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Sass",
        color: "pink-text-gradient",
      },
    ],
    image: bookstore,
    source_code_link: "https://github.com/jmonto55/Bookstore",
    live_demo_link: "https://book-store-s3pp.onrender.com/",
  },
];

export { services, technologies, experiences, projects };
