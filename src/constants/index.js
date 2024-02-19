import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  boompanda,
  git,
  mysql,
  meta,
  securePasswordStorage,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "FullStack Developer",
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
    name: "git",
    icon: git,
  },
  {
    name: "MySQL",
    icon: mysql,
  }
];

const experiences = [
  {
    title: "FullStack Developer",
    company_name: "Boompanda",
    icon: boompanda,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Developing full-stack web applications using React.js, Node.js, Express.js, and MySQL.",
      "Designing and implementing RESTful APIs for CRUD operations, ensuring data integrity and server-side validation.",
      "Working closely with front-end and back-end teams to integrate APIs and develop complex functionalities.",
      "Managing MySQL databases, including schema design, data modeling, and performance tuning.",
    ],
  },
];

const projects = [
  {
    name: "Secure Password Storage",
    description:
      "This is a simple demonstration of a secure password storage system using client-side hashing (SHA-256). Implemented User registration with client-side password hashing and User login with verification against hashed passwords.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "sha-256",
        color: "pink-text-gradient",
      },
    ],
    image: securePasswordStorage,
    source_code_link: "https://shadow-mo.github.io/Secure-Password-Storage/register.html",
  },
];

export { services, technologies, experiences, projects };